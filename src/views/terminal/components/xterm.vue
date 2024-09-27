<template>
    <input type="file" ref="fileInputRef" multiple style="display: none;" @change="startUploads" />
    <a ref="downloadRef" style="display:none;"></a>
    <template v-if="connectionStatus">
        <div class="terminal-div">
            <div id="terminal" ref="terminal"></div>
        </div>
    </template>
    <template v-else>
        <div class="break-style">已断开，请重新连接</div>
    </template>
    <!-- 文件上传弹窗 -->
    <a-modal v-model:open="transmissionProgressOpen" :closable="false" :footer="null" :maskClosable="false"
        :title="`文件${['下载', '上传'][transmissionProgressType as number]}中`">
        <div class="uploading-div">

            <template v-if="transmissionProgressType === 0">

                <a-input-group compact >
                    <a-input v-model:value="fileName" style="width: calc(100% - 70px)" />
                    <a-button type="primary" :disabled="!isDownloadAcComplish">下载</a-button>
                </a-input-group>
                <div class="items-center">
                    <a-tooltip>
                        <template #title>文件1231</template>
                        <div class="file-name">文件1231</div>
                    </a-tooltip>
                    <div style="flex: 1;margin-left: 20px;">
                        <a-progress :percent="calculatePercent(4, 100)" />
                    </div>
                    <a-button v-if="isSupportShowSaveFilePicker" @click="downloadFile" :disabled="!isDownloadAcComplish" type="primary">下载</a-button>
                </div>

            </template>

            <template v-else-if="transmissionProgressType === 1">
                <div class="items-center" v-for="(item, index) in filesList" :key="index">
                    <a-tooltip>
                        <template #title>{{ item.file.name }}</template>
                        <div class="file-name">{{ item.file.name }}</div>
                    </a-tooltip>
                    <div style="flex: 1;margin-left: 20px;">
                        <a-progress :percent="calculatePercent(item.currentChunk, item.totalChunks)" />
                    </div>

                </div>
            </template>

        </div>
    </a-modal>

</template>

<script setup lang='ts'>


import { onMounted, ref, reactive, onUnmounted } from "vue";
import { message } from "ant-design-vue";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { useI18n } from "vue-i18n";
import { debounce } from "lodash";
import "xterm/css/xterm.css";
import { Modal } from 'ant-design-vue';
import { secterm } from "@/../secterm/secterm";
import {
    sectermConnectRequest,
    sectermTeminalResize,
    sectermTeminalCharacters,
    sectermFileuploading,
    sectermFileUploadReq
} from "@/common/method/proto";
import { initSocket } from "@/common/method/socket"
import { blobToUint8Array } from "@/common/method/utils"
const props = defineProps<{
    username: string;
    password: string;
    submitLoading: boolean;
}>();
// const v1 = sectran_chard.secterm.v1;
const v1 = secterm.v1;
let terminal = ref(null);
// let path = ref<string>("ws://101.133.229.239:19529");
// let path = ref<string>("ws://127.0.0.1:19529");
// let path = ref<string>("ws://192.168.10.2:19529");
let path = ref<string>("ws://192.168.10.2:19528");
// let path = ref<string>("ws://192.168.10.1:19528");



let websocket = <any>(null);
let term = reactive<any>({});
let fitAddon = reactive<any>({});
let resizeScreen: any;
const { t } = useI18n();
const emit = defineEmits(["connectResult"]);
let connectionStatus = ref<boolean>(true);
let inFileSelect = ref<boolean>(false)
let fileInputRef = ref<HTMLInputElement>();
let isSupportShowSaveFilePicker = ref<boolean>(false); //浏览器是否支持showSaveFilePicker
onMounted(() => {
    initXterm();
    let socket = initSocket(path.value, 5000, 'arraybuffer', onOpen, onData, onError, onClose);
    websocket = socket

    if ('showSaveFilePicker' in window) isSupportShowSaveFilePicker.value = true
})




const initXterm = () => {
    let copy = "";
    let _term: any = new Terminal({
        convertEol: true,
        disableStdin: false,
        cursorBlink: true,
        fontSize: 14,
        fontWeight: "500",
        rightClickSelectsWord: true,
        theme: {
            foreground: "#333333",
            background: "#FFFFFF",
            cursor: "#6376C2",
            selectionBackground: '#cccccc'

        },
    });
    _term.open(terminal.value);
    _term.prompt = (_: any) => {
        _term.write("\r\n\x1b[33m$\x1b[0m ");
        term.selectLines(0, 0);
    };
    _term.onKey((e: any) => {
        if (e.key == "\x16" || (e.domEvent.metaKey && e.key === 'c')) {
            navigator.clipboard.readText().then((clipText) => {
                sendCharacters(clipText);
            });
        } else if (e.key == "\x03" && term.hasSelection()) {
            navigator.clipboard.writeText(term.getSelection());
        }
    });
    fitAddon = new FitAddon();
    _term.loadAddon(fitAddon);
    fitAddon.fit();
    resizeScreen = debounce(() => {
        try {
            fitAddon.fit();
            let { cols, rows } = term;
            let resizeParams = { Colums: cols, Rows: rows };
            sectermTeminalResize(resizeParams, websocket);
        } catch (e: any) {
            console.log("e", e.message);
        }
    }, 500);
    window.addEventListener("resize", () => {
        resizeScreen();
    });


    _term.onSelectionChange(() => {
        if (_term.hasSelection()) {
            copy = _term.getSelection();
            console.log("onselectchange", copy);
        }
    });
    if (!_term._initialized) {
        _term._initialized = true;
        _term.onData((raw: string) => {
            if (raw == '\x03') {
                // navigator.clipboard.writeText(copy);
                console.log("^C", copy);
                message.success("复制成功");
            } else if (raw == '\x16') {
                // _term.write(copy);
                console.log("1");
            } else {
                sendCharacters(raw)
            }

        });
    }
    term = _term;
};
const sendCharacters = (data: any) => { sectermTeminalCharacters(data, websocket) };

const onData = (msg: any) => {
    let sm = v1.SectermMessage.decode(new Uint8Array(msg.data));
    console.log(msg, "msg")
    // console.log(sm, 'sm')
    if (sm?.connectRes) {
        if (sm.connectRes.code != v1.SectermCode.LOGON_SUCCESS) {
            console.log("connect error deu to " + sm.connectRes.code);
        }
        console.log("connect success!");
    }
    if (sm?.characters) {
        if (props.submitLoading) {
            emit("connectResult", false);
            localStorage.setItem("username", props.username);
            localStorage.setItem("password", props.password);
        }

        // const uint8Array = new Uint8Array([sm.characters.Data]);
        // const string = Array.from(uint8Array).map(code => String.fromCharCode(code)).join('');
        // console.log(string);
        term.write(sm.characters.Data);
    }
    if (sm?.fileUploadReq && !inFileSelect.value) {
        console.log(sm.fileUploadReq, 'fileUploadReq');
        Modal.confirm({
            title: '是否确定上传文件?',
            okText: '上传文件',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                if (fileInputRef.value) {
                    fileInputRef.value.click()
                    isStopUploading = false
                    inFileSelect.value = true
                }
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    if (sm?.fileCmd?.cmd === v1.SectermFileCmd.UPLOAD_START) {
        console.log(filesuploadingIndex.value, 'filesuploadingIndex上传新的文件');
        if (isStopUploading) return
        if (filesuploadingIndex.value < filesList.value.length) uploadFile(filesList.value[filesuploadingIndex.value])
    }
    if (sm?.fileCmd?.cmd === v1.SectermFileCmd.UPLOAD_CONTINUE) {
        console.log("开始上传", endData)
        if (isStopUploading) return
        if (!endData) sendNextChunk()
    }
    if (sm?.fileCmd?.cmd === v1.SectermFileCmd.TRANS_ERROR) message.error('文件上传失败'), isStopUploading = true, transmissionProgressOpen.value = false
    if (sm?.fileCmd?.cmd === v1.SectermFileCmd.TRANS_FILE_EXISTED) message.error('文件上传重复'), isStopUploading = true, transmissionProgressOpen.value = false
};

type FileList = {
    file: File
    totalChunks: number
    currentChunk: number
}
//上传展示弹窗
let transmissionProgressOpen = ref<boolean>(false)
//上传类型 0下载  1上传
let transmissionProgressType = ref<Number>(0)

//文件列表
let filesList = ref<FileList[]>([])
let filesuploadingIndex = ref<number>(0)
const startUploads = (event: any) => {
    console.log(event.target.files, 'event.target.files');
    if (event.target.files.length !== 0) {
        filesList.value = []
        let files = event.target.files
        let FileInfo: { Name: string, Size: number }[] = []
        filesuploadingIndex.value = 0
        for (let file of files) {
            FileInfo.push({
                Name: file.name,
                Size: file.size,
            })
            filesList.value.push({ file, totalChunks: Math.ceil(file.size / chunkSize), currentChunk: 0 })
        }
        transmissionProgressType.value = 1
        transmissionProgressOpen.value = true
        console.log(FileInfo, 'FileInfo')
        sectermFileUploadReq({ FileInfo }, websocket)

        // 确保 fileInputRef.value 存在后再进行赋值操作
        if (fileInputRef.value) {
            (fileInputRef.value as HTMLInputElement).value = '';
        }
    } else {
        console.log("未选择文件");
    }
    inFileSelect.value = false
}

/**
 * 计算传输进度
 * @param currentChunk 当前分段
 * @param totalChunks 总分段
 */
const calculatePercent = (currentChunk: number, totalChunks: number) => {
    switch (currentChunk) {
        case 0:
            return 0
        case totalChunks:
            return 100
        default:
            return Math.round((currentChunk / totalChunks) * 100)
    }
}


//文件上传
const chunkSize = 8 * 1024; //每次上传文件大小
let totalChunks = 0 //总分段
let currentChunk = 0; //当前分段
let uploadFileItem: File //当前处理的file文件
let endData: boolean = false //当前文件是否是最后一次上传
let isStopUploading: boolean = false //停止上传
/**
 * 上传文件分段
 * @param file 文件
 */
const uploadFile = (fileItem: FileList) => {
    console.log(fileItem, 'file');
    totalChunks = fileItem.totalChunks
    currentChunk = 0
    uploadFileItem = fileItem.file
    endData = false
    sendNextChunk();
}
/**
 * 文件上传
 */
const sendNextChunk = async () => {
    const start = currentChunk * chunkSize;
    const end = Math.min(start + chunkSize, uploadFileItem.size);
    const blob = uploadFileItem.slice(start, end);
    if (currentChunk === totalChunks - 1) endData = true;
    // console.log(start, end)
    console.log(blob, 'blob')
    await blobToUint8Array(blob)
        .then(async (uint8Array: Uint8Array) => {
            let fileData = {
                file: {
                    Name: uploadFileItem.name,
                    Size: blob.size,
                },
                data: uint8Array,
                endData,
            }
            await sectermFileuploading(fileData, websocket)
            filesList.value[filesuploadingIndex.value].currentChunk = currentChunk + 1

            if (endData) {
                console.log('文件上传完成', uploadFileItem.name);
                if (filesuploadingIndex.value >= filesList.value.length - 1) {
                    transmissionProgressOpen.value = false
                } else {
                    filesuploadingIndex.value++
                }
            } else {
                currentChunk++
            }
        })
        .catch((error: any) => {
            console.error('Error converting Blob to Uint8Array:', error);
        });
    // handleLoad()
}

//每次文件下载大小
let downloadRef = ref<HTMLAnchorElement>();
const downloadChunkSize = 8 * 1024; //每次下载文件大小
let isStopDownload: boolean = false //停止下载
let grossBytes = 0;//总字节
let downloadedBytes = 0; // 已经下载的字节数
let downloadChunks = []; // 存储所有分段的数组 
let isDownloadAcComplish = ref<boolean>(false) //是否下载完成
let fileName = ref<string>('')
/**
 * 保存分段的Blob
 */
const downloadFileItem = async (blob: Blob) => {
    downloadedBytes += blob.size;
    downloadChunks.push(blob);
    if (downloadedBytes === grossBytes) {
        isDownloadAcComplish.value = true
    }

}

declare global {
    interface Window {
        showSaveFilePicker: (options?: any) => Promise<any>;
    }
}
/**
 * 下载文件
 * @param file 文件
 */
const downloadFile = async (fileBlob: Blob, fileName: string) => {
    //判断是否可以用 showSaveFilePicker 文件存入选择器
    if (isSupportShowSaveFilePicker) {
        try {
            const opts = {
                suggestedName: fileName,
                types: [
                    {
                        description: 'Text files',
                        accept: {
                            'text/plain': ['.txt']
                        }
                    },
                ],
                excludeAcceptAllOption: true
            };
            const handle = await window.showSaveFilePicker(opts); // 打开保存文件对话框
            const writable = await handle.createWritable(); // 创建可写入的文件对象
            // 在这里写入文件内容
            await writable.write(fileBlob);
            await writable.close();
            message.success('文件保存成功')

        } catch (error) {
            console.error('文件保存失败:', error);
        }
    } else {
        const fileUrl = URL.createObjectURL(fileBlob);
        if (downloadRef.value) {
            (downloadRef.value as HTMLAnchorElement).href = fileUrl;
            (downloadRef.value as HTMLAnchorElement).download = fileName;
            // 触发点击事件
            downloadRef.value.click();
        }

    }
}


const onOpen = () => {
    let { cols, rows } = term;
    const token: string | null = localStorage.getItem("token");
    let connectParams = {
        token: token,
        Colums: cols,
        Rows: rows,
        unmanaged: true,
        username: props.username,
        hostname: "101.133.229.239",
        port: 22,
        password: props.password,
    };
    console.log(connectParams)
    sectermConnectRequest(connectParams, websocket);
};
const onError = () => {
    if (props.submitLoading) {
        emit("connectResult", true);
    }
    message.error(t("socket.error"));
};
const onClose = () => {
    console.log(websocket)
    connectionStatus.value = false
    console.log("socket已经关闭");
};

onUnmounted(() => {
    resizeScreen.cancel();
});
</script>

<style scoped lang='less'>
.uploading-div {
    max-height: 60vh;
    overflow-y: auto;
    overflow-x: hidden;
}

.terminal-div {
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    position: relative;
}

.file-name {
    width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
}

#terminal {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    padding: 10px 10px 20px 20px;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track:hover {
        background-color: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
    }
}

.break-style {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>