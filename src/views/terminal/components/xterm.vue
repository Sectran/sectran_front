<template>
    <div class="terminal-div">
        <div id="terminal" ref="terminal"></div>
    </div>
</template>
<script setup lang='ts'>
import {
    onMounted,
    ref,
    reactive,
    onUnmounted
} from "vue";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { sectran_chard } from "../../../../secterm/secterm";
import "xterm/css/xterm.css";
import { sectermConnectRequest, sectermTeminalResize, secTeminalCharacters } from "@/utils/method/proto"
// import { throttle } from "@/utils/method/utils"
import { throttle } from 'lodash'
const v1 = sectran_chard.secterm.v1
let terminal = ref(null);
let path = ref<string>('ws://101.133.229.239:19529')
// let path = ref<string>("ws://127.0.0.1:19529");
let websocket = ref<any>("");
let term = reactive<any>({});
let resizeScreen: any

const props = defineProps<{
    username: string
    password: string
}>()
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
        rightClickSelectsWord: true,
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
    // 换行并输入起始符 $
    terms.prompt = (_: any) => {
        terms.write("\r\n\x1b[33m$\x1b[0m ");
    };

    terms.onKey((e: any) => {
        if (e.key == '\x16') {
            navigator.clipboard.readText().then(clipText => {
                write(clipText);
            })
        } else if (e.key == '\x03' && term.hasSelection()) {
            console.log(term.getSelection())
            navigator.clipboard.writeText(term.getSelection())
        }
    })

    // terms.onSelectionChange(() => {
    //     if (term.hasSelection()) {
    //         // this.copy = term.getSelection();
    //         // console.log("onselectchange", this.copy);
    //     }
    // });

    // canvas背景全屏
    const fitAddon = new FitAddon();
    terms.loadAddon(fitAddon);
    fitAddon.fit();
    resizeScreen = throttle(() => {
        try {
            console.log("改变")
            // fitAddon.fit();
            let { cols, rows } = term;
            let resizeParams = { Colums: cols, Rows: rows }
            let { uintArr, resizeData } = sectermTeminalResize(resizeParams)
            websocket.send(uintArr);
            websocket.send(resizeData);
        } catch (e: any) {
            console.log("e", e.message);
        }
    }, 3000, {
        leading: false,
        trailing: true
    })
    
    window.addEventListener("resize", ()=>{
        fitAddon.fit();
        resizeScreen();
    
    });
    term = terms;
    runFakeTerminal();
};
const runFakeTerminal = () => {
    if (term._initialized) return;
    term._initialized = true;
    term.onData((raw: any) => {
        console.log(raw)
        write(raw);
    });
};

const write = (data: any) => {
    let { uintArr, charactersData } = secTeminalCharacters(data)
    websocket.send(uintArr);
    websocket.send(charactersData);
};

const initSocket = () => {
    if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
    } else {
        websocket = new WebSocket(path.value);
        console.log(websocket)
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

    let connectParams = { token: '', Colums: cols, Rows: rows, unmanaged: true, username: props.username, hostname: '101.133.229.239', port: 22, password: props.password }
    console.log(connectParams)
    let { uintArr, connectData } = sectermConnectRequest(connectParams)
    websocket.send(uintArr);
    websocket.send(connectData);
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

onUnmounted(() => {
    resizeScreen.cancel()
}) 
</script>

<style scoped lang='less'>
.xterm-screen {
    width: 100%;
}
.terminal-div {
    width:  calc(100% - 30px);;
    height: calc(100% - 30px);
    padding: 10px 10px 20px 20px;
    // box-sizing: content-box;
}

#terminal {
    height: 100%;
    // width: 100%;
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
</style>