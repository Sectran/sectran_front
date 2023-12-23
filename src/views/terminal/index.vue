<template>
  <div class="configuration-style">
    <div class="configuration-nav">
      <a-dropdown v-for="(item, itemIndex) in headMenu">
        <a class="ant-dropdown-link" @click.prevent>
          {{ item.name }}
        </a>
        <template #overlay>
          <a-menu>
            <template v-for="(el, index) in item.children">
              <a-menu-divider v-if="el.name === 'divider'" />
              <a-sub-menu
                v-else-if="el.children"
                :key="index + '' + itemIndex"
                :title="el.name"
              >
                <a-menu-item v-for="i in el.children">{{ i.name }}</a-menu-item>
              </a-sub-menu>
              <a-menu-item :key="index" v-else>{{ el.name }}</a-menu-item>
            </template>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <a-row class="Content-style">
      <a-col :span="4" class="Content-left">
        <a-directory-tree multiple default-expand-all @select="on_node">
          <a-tree-node key="0-0" title="Default">
            <a-tree-node key="0-0-0" title="Linux" is-leaf />
          </a-tree-node>
        </a-directory-tree>
      </a-col>
      <a-col :span="20" class="content-style">
        <div v-if="isConnect" id="terminal" ref="terminal"></div>
        <div v-else class="placeholder-style">
          <div>
            <div>切换实例</div>
            <div>最近访问</div>
            <div>会话列表</div>
            <div>显示/隐藏菜单栏</div>
            <div>显示/隐藏按钮栏</div>
            <div>显示/隐藏状态栏</div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>

  <!-- @ok="handleOk" -->
  <!-- @click="handleOk" -->
  <a-modal v-model:open="connectOpen" title="链接 Linux" :footer="null">
    <a-tabs v-model:activeKey="connectKey">
      <a-tab-pane key="1" tab="SSH">
        <a-form
          :model="connectFormState"
          name="basic"
          @finish="on_connectFinish"
          :label-col="{ span: 4 }"
          :wrapper-col="{ span: 20 }"
          autocomplete="off"
        >
          <a-form-item
            label="账号"
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="connectFormState.username" />
          </a-form-item>

          <a-form-item
            label="密码"
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password v-model:value="connectFormState.password" />
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 0, span: 24 }">
            <a-button style="width: 100%" type="primary" html-type="submit">{{
              t("public.Submit")
            }}</a-button>
          </a-form-item>
        </a-form>
      </a-tab-pane>
      <!-- <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane> -->
    </a-tabs>
    <!-- :loading="loading" -->
  </a-modal>
</template>


<script setup lang='ts'>
import {
  onBeforeMount,
  onMounted,
  watchEffect,
  ref,
  reactive,
  nextTick,
} from "vue";
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { sectran_chard } from "../../../secterm/secterm";
// import { DownOutlined } from '@ant-design/icons-vue';
import "xterm/css/xterm.css";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
let terminal = ref(null);
let path = ref<string>("ws://101.133.229.239:19529");
// let path = ref<string>("ws://127.0.0.1:19529");
let websocket = ref<any>("");
let term = reactive<any>({});
let socket = reactive<any>({});

const connectKey = ref("1");
let packetLen = ref(0);

let connectOpen = ref<Boolean>(false);
let isConnect = ref<Boolean>(false);
let headMenu: any = [
  {
    name: "文件",
    children: [
      { name: "新建文件" },
      { name: "新建文件夹" },
      { name: "divider" },
      { name: "打开新文件树" },
      { name: "divider" },
      { name: "打开新文件管理" },
      { name: "divider" },
      { name: "保存" },
      { name: "全部保存" },
    ],
  },
  {
    name: "编辑",
    children: [
      { name: "撤销" },
      { name: "重做" },
      { name: "divider" },
      { name: "复制" },
      { name: "剪切" },
      { name: "divider" },
      { name: "查找" },
      { name: "替换" },
    ],
  },
  {
    name: "视图",
    children: [
      { name: "打开视图" },
      { name: "最近访问" },
      { name: "divider" },
      { name: "显示/隐藏菜单栏" },
      { name: "显示/隐藏状态栏" },
      { name: "显示/隐藏按钮栏" },
      { name: "显示/隐藏工具栏" },
      { name: "显示/隐藏实例菜单栏" },
      { name: "divider" },
      { name: "导出布局数据" },
      { name: "导入布局" },
      { name: "折叠所有侧边面板" },
    ],
  },
  {
    name: "实例",
    children: [
      { name: "切换实例" },
      { name: "新建实例窗口" },
      { name: "私网链路" },
      { name: "退出实例登录" },
    ],
  },
  {
    name: "会话",
    children: [
      { name: "新终端" },
      { name: "横向打开新终端" },
      { name: "纵向打开新终端" },
      { name: "divider" },
      { name: "会话管理" },
      { name: "最近访问" },
      { name: "会话列表" },
    ],
  },
  {
    name: "功能",
    children: [
      { name: "系统管理" },
      { name: "运维功能", children: [{ name: "javaDump" }] },
      { name: "多屏终端" },
    ],
  },
];
// let headNavigation

onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
});
onMounted(() => {
  window.addEventListener("beforeunload", (e: any) => {
    e.returnValue = "您确定要离开吗？请确认是否保存您的更改。";
    e.preventDefault();
  });

  //console.log('3.-组件挂载到页面之后执行-------onMounted')
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
      // console.log(terms);
      // let sectermMessage = new sectran_chard.secterm.v1.SectermTerminalResize()
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
  console.log(data);
  let sectermMessage = new sectran_chard.secterm.v1.SectermMessage();
  sectermMessage.mesType =
    sectran_chard.secterm.v1.SectermMessageType.SectranTeminalCharactersMessage;
  // sectermMessage.request = stringToUint8Array(data)
  // sectermMessage.Data = stringToUint8Array(data)
  // sectermMessage.Data = stringToUint8Array(data)
  socket.send(sectermMessage);
};

const stringToUint8Array = (str: string) => {
  const encoder = new TextEncoder();
  return encoder.encode(str);
};

const initSocket = () => {
  console.log(term);

  if (typeof WebSocket === "undefined") {
    alert("您的浏览器不支持socket");
  } else {
    websocket = new WebSocket(path.value);
    websocket.binaryType = "arraybuffer";
    websocket.onopen = () => {
      console.log("成功");
      onOpen();
    };
    websocket.onmessage = (evt: any) => {
      onData(evt.data);
    };
    websocket.onerror = (evt: any) => {
      onError(evt);
    };
    websocket.onclose = (evt: any) => {
      console.log(evt);
      onClose(evt);
    };
    websocket.onclose = () => {
      onClose();
    };
    socket = websocket;
  }
};
const onData = async (msg: any) => {
  let sm = sectran_chard.secterm.v1.SectermMessage.decode(new Uint8Array(msg));

  console.log(sm);
  switch (sm.mesType) {
    case sectran_chard.secterm.v1.SectermMessageType
      .SectermConnectResponseMessage:
      if (
        sm.response?.code != sectran_chard.secterm.v1.SectermCode.LOGON_SUCCESS
      ) {
        console.log("connect error deu to " + sm.response?.code);
      }

      console.log("connect success!");
      break;
    case sectran_chard.secterm.v1.SectermMessageType
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
    sectran_chard.secterm.v1.SectermMessageType.SectermConnectRequestMessage;
  let connectMessage = new sectran_chard.secterm.v1.SectermConnectRequest();
  connectMessage.token = "";
  connectMessage.Colums = cols;
  connectMessage.Rows = rows;
  connectMessage.unmanaged = true;
  connectMessage.username = connectFormState.username;
  connectMessage.hostname = "101.133.229.239";
  connectMessage.port = 22;
  connectMessage.password = stringToUint8Array(connectFormState.password);
  connectMessage.authMethod = sectran_chard.secterm.v1.AuthMethod.PASSWORD_AUTH;
  let sectermMessage = new sectran_chard.secterm.v1.SectermMessage();
  sectermMessage.request = connectMessage;
  sectermMessage.mesType = mesType;
  let data =
    sectran_chard.secterm.v1.SectermMessage.encode(sectermMessage).finish();
  let len: number = data.length;
  const uintArr = Uint32Array.from([len]);
  websocket.send(uintArr);
  websocket.send(data);
};

const onError = (evt?: Event) => {
  console.log(evt);
  console.log("socket连接错误");
};

const onClose = (evt?: CloseEvent) => {
  console.log(evt);
  console.log("socket已经关闭");
};

watchEffect(() => {});

const on_node = () => {
  connectOpen.value = true;
};

interface ConnectFormState {
  username: string;
  password: string;
}

const connectFormState = reactive<ConnectFormState>({
  username: "root",
  password: "Ryan@1218pass",
});

const on_connectFinish = () => {
  console.log(connectFormState);
  isConnect.value = true;

  nextTick(() => {
    connectOpen.value = false;
    initXterm();
    initSocket();
  });
};
</script>
<style scoped lang='less'>
.content-style {
  padding: 20px;
  height: 100%;
}

#terminal {
  height: 100%;
}

.configuration-style {
  .configuration-nav {
    height: 40px;
    padding: 0 40px;
    line-height: 40px;
    background: #463e3e;
    color: #ffffff;
    font-size: 16px;

    .ant-dropdown-link {
      margin-right: 20px;
    }
  }

  .Content-style {
    height: calc(100vh - 40px);

    .Content-left {
      background: #2f2a2a;
      padding: 20px;

      ::v-deep(.ant-tree-list) {
        background: #2f2a2a;
        color: #ffffff;
      }
    }

    .placeholder-style {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      div {
        div {
          font-size: 18px;
          margin-bottom: 20px;
          color: #267bfc;
        }
      }
    }
  }
}
</style>