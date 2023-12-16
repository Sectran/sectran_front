<template>
    <div class="configuration-style">
        <div class="configuration-nav"></div>
        <a-row class="Content-style">
            <a-col :span="4" class="Content-left">
                <a-directory-tree multiple default-expand-all>
                    <a-tree-node key="0-0" title="parent 0">
                        <a-tree-node key="0-0-0" title="leaf 0-0" is-leaf />
                        <a-tree-node key="0-0-1" title="leaf 0-1" is-leaf />
                    </a-tree-node>
                    <a-tree-node key="0-1" title="parent 1">
                        <a-tree-node key="0-1-0" title="leaf 1-0" is-leaf />
                        <a-tree-node key="0-1-1" title="leaf 1-1" is-leaf />
                    </a-tree-node>
                </a-directory-tree>
            </a-col>
            <a-col :span="20">
                <div id="terminal" ref="terminal"></div>
            </a-col>
        </a-row>
    </div>
</template>

<script setup lang='ts'>
import { onBeforeMount, onMounted, watchEffect, ref, reactive } from 'vue';
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
// import { sectran_chard } from '../../../secterm/chard_h5_nego';
import { sectran_chard } from '../../../secterm/secterm';
import "xterm/css/xterm.css";

// let data = sectran_chard.secterm.v1.SectermConnectResponse.encode({})
let data = sectran_chard.secterm.v1.SectermConnectRequest.encode({ Colums: 10, Rows: 3 }).finish()
let len: number = data.length
const uintArr = Uint32Array.from([len]);

console.log(uintArr);

let adta = sectran_chard.secterm.v1.SectermConnectRequest.decode(data)
console.log(adta)

let terminal = ref(null)
let path = ref<string>('ws://101.133.229.239:19529')
let websocket = ref<any>('')
let term = reactive<any>({})
let socket = reactive<any>({})




onBeforeMount(() => {
    //console.log('2.组件挂载页面之前执行----onBeforeMount')
})
onMounted(() => {

    window.addEventListener('beforeunload', (e: any) => {
        e.returnValue = '您确定要离开吗？请确认是否保存您的更改。';
        e.preventDefault();

    });



    initSocket()
    //console.log('3.-组件挂载到页面之后执行-------onMounted')
})

const initXterm = () => {
    let terms: any = new Terminal({
        // rendererType: "canvas", //渲染类型
        // rows: _this.rows, //行数
        // cols: _this.cols, // 不指定行数，自动回车后光标从下一行开始
        convertEol: true, //启用时，光标将设置为下一行的开头
        disableStdin: false, //是否应禁用输入
        cursorBlink: true, //光标闪烁
        fontSize: 18, //字体大小
        fontWeight:"500",
        lineHeight: 0,
        theme: {
            foreground: "#000000", //字体
            background: "#FFFFFF", //背景色
            // cursor: "help", //设置光标
            cursor: "#6376C2", //设置光标
            //
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
        } catch (e: any) {
            console.log("e", e.message);
        }
    }
    term = terms
    runFakeTerminal();
}
const runFakeTerminal = () => {
    if (term._initialized) return;
    // 初始化
    term._initialized = true;
    term.onData((raw: any) => {
        write(raw);
    });
}
const write = (data: any) => {
    socket.send(stringToUint8Array(data));
}
const stringToUint8Array = (str: string) => {
    console.log(str)
    var arr = [];
    for (var i = 0, j = str.length; i < j; ++i) {
        arr.push(str.charCodeAt(i));
    }
    var tmpUint8Array = new Uint8Array(arr);
    return tmpUint8Array;
}

const initSocket = () => {
    if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
    } else {
        websocket = new WebSocket(path.value);
        websocket.onopen = () => {
            console.log('成功')
            onOpen();
        };
        websocket.onmessage = (evt: any) => {
            console.log(evt)
            onData(evt.data);
        };
        websocket.onerror = (evt: any) => {
            onError(evt);
        };
        websocket.onclose = (evt: any) => {
            console.log(evt)
            onClose(evt);
        };
        websocket.onclose = () => {
            onClose();
        };
        socket = websocket;
    }
}
const onData = (msg: any) => {
    console.log(msg)


    msg.text().then((data: any) => {
        term.write(data);
    })
        .catch((err: string) => {
            console.log(err);
        });
}
const onOpen = () => {
    let mesType = sectran_chard.secterm.v1.SectermMessageType.SectermConnectRequestMessage
    let connectMessage = new sectran_chard.secterm.v1.SectermConnectRequest
    connectMessage.token = ''
    connectMessage.Colums = 170
    connectMessage.Rows = 50
    connectMessage.unmanaged = true
    connectMessage.username = 'root'
    connectMessage.hostname = '101.133.229.239'
    connectMessage.port = 22
    connectMessage.password =  stringToUint8Array('Ryan@1218pass') 
    connectMessage.authMethod = sectran_chard.secterm.v1.AuthMethod.PASSWORD_AUTH
    let sectermMessage = new sectran_chard.secterm.v1.SectermMessage
    sectermMessage.request = connectMessage
    sectermMessage.mesType = mesType
    let data = sectran_chard.secterm.v1.SectermMessage.encode(sectermMessage).finish()
    let len: number = data.length
    const uintArr = Uint32Array.from([len]);
    websocket.send(uintArr)
    websocket.send(data)
    console.log("socket连接成功");
    initXterm()
}


const onError = (evt?: Event) => {
    console.log(evt)
    console.log("socket连接错误");
}

// const onSend = () => {
//     //   this.socket.send();
// }
const onClose = (evt?: CloseEvent) => {
    console.log(evt)
    console.log("socket已经关闭");
}
watchEffect(() => {
})


// function numberToUint32LE(value: number): Uint8Array {
//     const buffer = new ArrayBuffer(4);
//     const view = new DataView(buffer);

//     // 设置 32 位整数，第二个参数表示是否使用小端字节序
//     view.setUint32(0, value, true);

//     // 将 DataView 转换为 Uint8Array
//     return new Uint8Array(buffer);
// }


</script>
<style scoped lang='less'>
#terminal {
    height: 800px;
    padding: 10px 15px;
}

.configuration-style {
    width: 100%;
    height: 100vh;

    .configuration-nav {
        height: 30px;
        background: #463E3E;
    }

    .Content-style {
        height: calc(100vh - 30px);

        .Content-left {
            background: #2F2A2A;
            padding: 20px;

            ::v-deep(.ant-tree-list) {
                background: #2F2A2A;
                color: #ffffff;
            }
        }
    }
}
</style>