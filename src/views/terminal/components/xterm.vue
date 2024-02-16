<template>
  <!-- :style="{ height: `calc(100% / ${heightNum} - 30px)`, width: `calc(100% / ${widthNum} - 30px)`}" -->
  <div class="terminal-div" ref="myButton">
    <div id="terminal" ref="terminal"></div>
  </div>
</template>
<script setup lang='ts'>
import { onMounted, ref, reactive, onUnmounted } from "vue";
import { message } from "ant-design-vue";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { sectran_chard } from "../../../../secterm/secterm";
import "xterm/css/xterm.css";
import {
  sectermConnectRequest,
  sectermTeminalResize,
  secTeminalCharacters,
} from "@/utils/method/proto";
// import { throttle } from "@/utils/method/utils"
import { debounce } from "lodash";
const v1 = sectran_chard.secterm.v1;
console.log(sectran_chard);
let terminal = ref(null);
let path = ref<string>("ws://101.133.229.239:19529");
// let path = ref<string>("ws://127.0.0.1:19529");
let websocket = ref<any>("");
let term = reactive<any>({});
let fitAddon = reactive<any>({});
let resizeScreen: any;
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const emit = defineEmits(["connectResult"]);

const props = defineProps<{
  username: string;
  password: string;
  submitLoading: boolean;
}>();
onMounted(() => {
  initXterm();
  initSocket();
});

const myButton = ref(null);

const initXterm = () => {
  let terms: any = new Terminal({
    convertEol: true,
    disableStdin: false,
    cursorBlink: true,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 0,
    rightClickSelectsWord: true,
    theme: {
      foreground: "#000000",
      background: "#FFFFFF",
      // cursor: "help",
      cursor: "#6376C2",
      // lineHeight: 20
    },
  });
  write;
  // 创建terminal实例
  terms.open(terminal.value);
  // 换行并输入起始符 $
  terms.prompt = (_: any) => {
    terms.write("\r\n\x1b[33m$\x1b[0m ");
    term.selectLines(0, 0);
  };

  terms.onKey((e: any) => {
    if (e.key == "\x16") {
      navigator.clipboard.readText().then((clipText) => {
        write(clipText);
      });
    } else if (e.key == "\x03" && term.hasSelection()) {
      navigator.clipboard.writeText(term.getSelection());
    }
  });

  // terms.onSelectionChange(() => {
  //     if (term.hasSelection()) {
  //         // this.copy = term.getSelection();
  //         // console.log("onselectchange", this.copy);
  //     }
  // });

  // canvas背景全屏
  fitAddon = new FitAddon();
  terms.loadAddon(fitAddon);
  fitAddon.fit();
  resizeScreen = debounce(() => {
    try {
      console.log("更新页面");
      fitAddon.fit();
      let { cols, rows } = term;
      let resizeParams = { Colums: cols, Rows: rows };
      let { uintArr, resizeData } = sectermTeminalResize(resizeParams);
      websocket.send(uintArr);
      websocket.send(resizeData);
    } catch (e: any) {
      console.log("e", e.message);
    }
  }, 3000);

  window.addEventListener("resize", () => {
    resizeScreen();
  });
  term = terms;
  runFakeTerminal();
};

const runFakeTerminal = () => {
  if (term._initialized) return;
  term._initialized = true;
  term.onData((raw: string) => {
    write(raw);
  });
};

const write = (data: any) => {
  let { uintArr, charactersData } = secTeminalCharacters(data);
  websocket.send(uintArr);
  websocket.send(charactersData);
};

const initSocket = () => {
  if (typeof WebSocket === "undefined") {
    alert("您的浏览器不支持socket");
  } else {
    websocket = new WebSocket(path.value);
    websocket.binaryType = "arraybuffer";
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

  if (sm instanceof v1.SectermConnectResponse) {
    if (sm.code != v1.SectermCode.LOGON_SUCCESS) {
      console.log("connect error deu to " + sm.code);
    }
    console.log("connect success!");
  }

  if (sm instanceof v1.SectranTeminalCharacters) {
    if (props.submitLoading) {
      emit("connectResult", false);
      localStorage.setItem("username", props.username);
      localStorage.setItem("password", props.password);
    }
    term.write(sm.Data);
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
  let { uintArr, connectData } = sectermConnectRequest(connectParams);
  websocket.send(uintArr);
  websocket.send(connectData);
};

const onError = (evt?: Event) => {
  console.log(evt);
  if (props.submitLoading) {
    emit("connectResult", true);
  }
  message.error(t("socket.error"));
};

// const onSend = () => {
//     //   this.socket.send();
// }
const onClose = (evt?: CloseEvent) => {
  console.log(evt);
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

  // background: red;
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

.shiyan {
  height: 100%;
  width: 100%;
  background: red;
}
</style>