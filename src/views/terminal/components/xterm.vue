<template>
    <input type="file" id="fileInput" multiple style="display: none;" />
    <template v-if="connectionStatus">

        <div class="terminal-div">
            <div id="terminal" ref="terminal"></div>
        </div>
    </template>

    <template v-else>
        <div class="break-style">已断开，请重新连接</div>
    </template>
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
let path = ref<string>("ws://192.168.10.2:19529");
let websocket = <any>(null);
let term = reactive<any>({});
let fitAddon = reactive<any>({});
let resizeScreen: any;
const { t } = useI18n();
const emit = defineEmits(["connectResult"]);
let connectionStatus = ref<boolean>(true);
let inFileSelect = ref<boolean>(false)
onMounted(() => {
    initXterm();
    let socket = initSocket(path.value, 5000, 'arraybuffer', onOpen, onData, onError, onClose);
    websocket = socket
});

const initXterm = () => {
    let _term: any = new Terminal({
        convertEol: true,
        disableStdin: false,
        cursorBlink: true,
        fontSize: 14,
        fontWeight: "500",
        rightClickSelectsWord: true,
        theme: {
            foreground: "red",
            background: "#FFFFFF",
            cursor: "#6376C2",
        },
    });
    _term.open(terminal.value);
    _term.prompt = (_: any) => {
        _term.write("\r\n\x1b[33m$\x1b[0m ");
        term.selectLines(0, 0);
    };
    _term.onKey((e: any) => {
        if (e.key == "\x16") {
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
    if (!_term._initialized) {
        _term._initialized = true;
        _term.onData((raw: string) => {
            sendCharacters(raw)
        });
    }
    term = _term;
};
const sendCharacters = (data: any) => { sectermTeminalCharacters(data, websocket) };

const onData = (msg: any) => {
    let sm = v1.SectermMessage.decode(new Uint8Array(msg.data));

    // console.log(msg, "msg")
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
                let fileInput = document.getElementById('fileInput');
                if (fileInput) {
                    fileInput.addEventListener('change', startUploads, false);
                    document.getElementById('fileInput')?.click()
                    inFileSelect.value = true
                }
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    if (sm?.fileCmd) {
        console.log(sm.fileCmd, 'fileCmd');
        if (filesuploadingIndex.value <= filesList.value.length) {
            console.log(filesuploadingIndex.value)
            uploadFile(filesList.value[filesuploadingIndex.value])
        }
    }
};

let filesList = ref<File[]>([])
let filesuploadingIndex = ref<number>(0)
const startUploads = (event: any) => {
    inFileSelect.value = false
    if (event.target.files.length !== 0) {
  
        // console.log(event.target.files, 'event.target.files');
        let files = event.target.files
        // if (event.target.files.length === 1) files = [event.target.files]
        // else files = event.target.files;
        filesList.value = files
        let FileInfo: { Name: string, Size: number }[] = []
        filesList.value = files
        for (let file of files) {
            FileInfo.push({
                Name: file.name,
                Size: file.size,
            })
        }
        // console.log(FileInfo, 'FileInfo')
        sectermFileUploadReq({ FileInfo }, websocket)
    } else {
        console.log("未选择文件");
    }

}

const uploadFile = (file: File) => {
    console.log(file, 'file');
    // 1 * 1024
    const chunkSize = 8 * 1024;
    const totalChunks = Math.ceil(file.size / chunkSize);
    let currentChunk = 0; // 当前分段
    async function sendNextChunk() {
        const start = currentChunk * chunkSize;
        const end = Math.min(start + chunkSize, file.size);
        const blob = file.slice(start, end);
        console.log(start, end)
        console.log(blob, 'blob')
        await blobToUint8Array(blob)
            .then(async (uint8Array: Uint8Array) => {
                let fileData = {
                    file: {
                        Name: file.name,
                        Size: blob.size,
                    },
                    data: uint8Array,
                    endData: false,
                }
                await sectermFileuploading(fileData, websocket)

            })
            .catch((error: any) => {
                console.error('Error converting Blob to Uint8Array:', error);
            });
        handleLoad()
    }
    async function handleLoad() {
        currentChunk++;
        if (currentChunk < totalChunks) {
            
            sendNextChunk();
        } else {
            console.log(currentChunk)
            console.log(`发送完成: ${file.name}`);
            let fileItem = filesList.value[filesuploadingIndex.value]
            let fileData = {
                file: {
                    Name: fileItem.name,
                    Size: 0,
                },
                data: [],
                endData: true,
            }
            setTimeout(() => sectermFileuploading(fileData, websocket), 1000)
            filesuploadingIndex.value++
        }
    }
    sendNextChunk();
}


const onOpen = () => {
    let { cols, rows } = term;
    let connectParams = {
        token: "",
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
.terminal-div {
    width: calc(100% - 30px);
    height: calc(100% - 30px);
    position: relative;
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