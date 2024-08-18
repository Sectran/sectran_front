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
import { sectran_chard } from "@/../secterm/secterm";
import {
    sectermConnectRequest,
    sectermTeminalResize,
    sectermTeminalCharacters,
    sectermFileuploading
} from "@/common/method/proto";
import { initSocket } from "@/common/method/socket"
import { blobToUint8Array } from "@/common/method/utils"
const props = defineProps<{
    username: string;
    password: string;
    submitLoading: boolean;
}>();
const v1 = sectran_chard.secterm.v1;
let terminal = ref(null);
// let path = ref<string>("ws://101.133.229.239:19529");
// let path = ref<string>("ws://127.0.0.1:19529");
let path = ref<string>("ws://192.168.10.2:8082");
let websocket = <any>(null);
let term = reactive<any>({});
let fitAddon = reactive<any>({});
let resizeScreen: any;
const { t } = useI18n();
const emit = defineEmits(["connectResult"]);
let connectionStatus = ref<boolean>(true);
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
            foreground: "#000000",
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
    console.log(msg)
    console.log(sm)
    if (sm?.response) {
        if (sm.response.code != v1.SectermCode.LOGON_SUCCESS) {
            console.log("connect error deu to " + sm.response.code);
        }
        console.log("connect success!");
    }
    if (sm?.characters) {
        if (props.submitLoading) {
            emit("connectResult", false);
            localStorage.setItem("username", props.username);
            localStorage.setItem("password", props.password);
        }
        term.write(sm.characters.Data);
    }
    if (sm?.fileUploadReq) {
        Modal.confirm({
            title: '是否确定上传文件?',
            okText: '上传文件',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                let fileInput = document.getElementById('fileInput');
                console.log(fileInput)
                if (fileInput) {
                    fileInput.addEventListener('change', startUploads, false);
                    document.getElementById('fileInput')?.click()
                }
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

};

let filesList = ref<File[]>([])
let filesuploadingIndex = ref<number>(0)
const startUploads = (event: any) => {
    let files = event.target.files;
    filesList.value = files
    uploadFile(filesList.value[0])
    filesuploadingIndex.value = 0
}

const uploadFile = (file: File) => {
    console.log(file, 'file');
    // 1 * 1024
    const chunkSize = 8 * 1024; // 每个分段的大小，这里设置为1MB
    const totalChunks = Math.ceil(file.size / chunkSize); // 总分段数
    let currentChunk = 0; // 当前分段
    async function sendNextChunk() {
        const start = currentChunk * chunkSize;
        const end = Math.min(start + chunkSize, file.size);
        const blob = file.slice(start, end);
        console.log(start, end)
        console.log(blob, 'blob')
        await blobToUint8Array(blob)
            .then((uint8Array: Uint8Array) => {
                let fileData = {
                    file: {
                        Name: file.name,
                        Size: blob.size,
                    },
                    data: uint8Array,
                    endData: false,
                }
                console.log(fileData)
                sectermFileuploading(fileData, websocket)

            })
            .catch((error: any) => {
                console.error('Error converting Blob to Uint8Array:', error);
            });

        handleLoad()
    }

    function handleLoad() {
        currentChunk++;
        if (currentChunk < totalChunks) {
            sendNextChunk();
        } else {
            console.log(currentChunk)
            console.log(`发送完成: ${file.name}`);
            sectermFileuploading({ endData: true }, websocket)
            filesuploadingIndex.value++
            if (filesuploadingIndex.value === filesList.value.length) {

            } else {
                uploadFile(filesList.value[filesuploadingIndex.value])
            }

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