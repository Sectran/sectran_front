<template>
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

import { sectran_chard } from "@/../secterm/secterm";
import {
    sectermConnectRequest,
    sectermTeminalResize,
    sectermTeminalCharacters,
} from "@/common/method/proto";
import { initSocket } from "@/common/method/socket"

const props = defineProps<{
    username: string;
    password: string;
    submitLoading: boolean;
}>();
const v1 = sectran_chard.secterm.v1;
let terminal = ref(null);
let path = ref<string>("ws://101.133.229.239:19529");
// let path = ref<string>("ws://127.0.0.1:19529");
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
    //TODO:
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
};
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

.break-style{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>