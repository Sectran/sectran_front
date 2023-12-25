<template>
    <div id="terminal" ref="terminal"></div>
</template>
<script setup lang='ts'>
import {
    onMounted,
    ref,
    reactive,
} from "vue";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { sectran_chard } from "../../../../secterm/secterm";

import "xterm/css/xterm.css";
const v1 = sectran_chard.secterm.v1
let terminal = ref(null);
let path = ref<string>('ws://101.133.229.239:19529')
// let path = ref<string>("ws://127.0.0.1:19529");
let websocket = ref<any>("");
let term = reactive<any>({});

onMounted(() => {
    initXterm();
    initSocket();
});

const initXterm = () => {
    let terms: any = new Terminal({
        // rendererType: "canvas", //渲染类型
        // rows: _this.rows, //行数
        // cols: _this.cols, // 不指定行数，自动回车后光标从下一行开始
        convertEol: true, //启用时，光标将设置为下一行的开头
        disableStdin: false, //是否应禁用输入
        cursorBlink: true, //光标闪烁
        fontSize: 14, //字体大小
        fontWeight: "500",
        lineHeight: 0,
        theme: {
            foreground: "#000000", //字体
            background: "#FFFFFF", //背景色
            // cursor: "help", //设置光标
            cursor: "#6376C2", //设置光标
            // lineHeight: 20
        },
    });
    // 创建terminal实例
    terms.open(terminal.value);
    // fitAddon.fit()
    // 换行并输入起始符 $
    terms.prompt = (_: any) => {
        terms.write("\r\n\x1b[33m$\x1b[0m ");
    };
    // canvas背景全屏
    const fitAddon = new FitAddon();
    terms.loadAddon(fitAddon);
    fitAddon.fit();

    window.addEventListener("resize", resizeScreen);
    function resizeScreen() {
        try {
            fitAddon.fit();
            let { cols, rows } = term;
            let sectermMessage = new v1.SectermMessage();
            sectermMessage.mesType =
                v1.SectermMessageType.SectranTeminalResizeMessage;
            let resize = new v1.SectermTerminalResize()
            resize.colums = cols
            resize.rows = rows
            sectermMessage.resize = resize
            console.log(resize)
            let smSize =
                v1.SectermMessage.encode(sectermMessage).finish();
            let len: number = smSize.length;
            const uintArr = Uint32Array.from([len]);
            websocket.send(uintArr);
            websocket.send(smSize);
        } catch (e: any) {
            // console.log("e", e.message);
        }
    }
    // console.log(terms);

    term = terms;
    runFakeTerminal();
};
const runFakeTerminal = () => {
    if (term._initialized) return;
    // 初始化
    term._initialized = true;
    term.onData((raw: any) => {
        console.log(raw);
        write(raw);
    });
};

const write = (data: any) => {
    let sectermMessage = new v1.SectermMessage();
    sectermMessage.mesType =
        v1.SectermMessageType.SectranTeminalCharactersMessage;

    let chars = new v1.SectranTeminalCharacters();
    chars.Data = stringToUint8Array(data);

    sectermMessage.characters = chars;
    let smBuffer =
        v1.SectermMessage.encode(sectermMessage).finish();

    let len: number = smBuffer.length;
    const uintArr = Uint32Array.from([len]);
    websocket.send(uintArr);
    websocket.send(smBuffer);
};

const stringToUint8Array = (str: string) => {
    const encoder = new TextEncoder();
    return encoder.encode(str);
};

const initSocket = () => {
    if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
    } else {
        websocket = new WebSocket(path.value);
        websocket.binaryType = 'arraybuffer';
        websocket.onopen = () => {
            onOpen();
        };
        websocket.onmessage = (evt: any) => {
            onData(evt.data);
        };
        websocket.onerror = (evt: any) => {
            onError(evt);
        };
        websocket.onclose = (evt: any) => {
            onClose(evt);
        };
        websocket.onclose = () => {
            onClose();
        };
    }
};
const onData = (msg: any) => {
    let sm = v1.SectermMessage.decode(new Uint8Array(msg));

    switch (sm.mesType) {
        case v1.SectermMessageType
            .SectermConnectResponseMessage:
            if (
                sm.response?.code != v1.SectermCode.LOGON_SUCCESS
            ) {
                console.log("connect error deu to " + sm.response?.code);
            }

            console.log("connect success!");
            break;
        case v1.SectermMessageType
            .SectranTeminalCharactersMessage:
            term.write(sm.characters?.Data);
            break;
        default:
            console.log("unknow secterm message type of " + sm.mesType);
    }
};
const onOpen = () => {
    let { cols, rows } = term;
    let mesType =
        v1.SectermMessageType.SectermConnectRequestMessage;
    let connectMessage = new v1.SectermConnectRequest();
    connectMessage.token = "";
    connectMessage.Colums = cols;
    connectMessage.Rows = rows;
    connectMessage.unmanaged = true;
    // connectMessage.username = connectFormState.username;
    connectMessage.username = 'root';

    connectMessage.hostname = "101.133.229.239";
    connectMessage.port = 22;
    // connectMessage.password = stringToUint8Array(connectFormState.password);
    connectMessage.password = stringToUint8Array("Ryan@1218pass");

    connectMessage.authMethod = v1.AuthMethod.PASSWORD_AUTH;
    let sectermMessage = new v1.SectermMessage();
    sectermMessage.request = connectMessage;
    sectermMessage.mesType = mesType;
    let data =
        v1.SectermMessage.encode(sectermMessage).finish();
    let len: number = data.length;
    const uintArr = Uint32Array.from([len]);
    websocket.send(uintArr);
    websocket.send(data);
};

const onError = (evt?: Event) => {
    console.log(evt);
    console.log("socket连接错误");
};

// const onSend = () => {
//     //   this.socket.send();
// }
const onClose = (evt?: CloseEvent) => {
    console.log(evt);
    console.log("socket已经关闭");
};
</script>

<style>
#terminal {
    height: 100%;
    width: 100%;
}
</style>