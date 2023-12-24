<template>
    <a-watermark v-bind="store.state.globalConfiguration.watermarkConfiguration">
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
                                <a-sub-menu v-else-if="el.children" :key="index + '' + itemIndex" :title="el.name">
                                    <a-menu-item v-for="i in el.children">{{ i.name }}</a-menu-item>
                                </a-sub-menu>
                                <a-menu-item :key="index" v-else>{{ el.name }}</a-menu-item>
                            </template>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
            <!-- <div @click="value++">{{ value}}</div> -->
            <a-row class="Content-style">
            
                <a-col :span="4" class="Content-left">
                    <a-directory-tree multiple default-expand-all @select="on_node">
                        <a-tree-node key="0-0" title="Default">
                            <a-tree-node key="0-0-0" title="Linux" is-leaf />
                        </a-tree-node>
                    </a-directory-tree>
                </a-col>
                <a-col :span="20" class="content-style">
                    <a-row class="xterm-div" v-if="isConnect">
                        <a-col :span="24 / value" v-for="item in value" :key="item">
                            <xterm></xterm>
                        </a-col>
                        <!-- <a-col :span="12">
                            <xterm></xterm>
                        </a-col>
                        <a-col :span="12">
                            <xterm></xterm>
                        </a-col> -->
                    </a-row>

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
                <a-tab-pane key="1" tab="密码验证">
                    <a-form :model="connectFormState" name="basic" @finish="on_connectFinish" :label-col="{ span: 4 }"
                        :wrapper-col="{ span: 20 }" autocomplete="off">
                        <a-form-item label="账号" name="username" :rules="[
                            { required: true, message: 'Please input your username!' },
                        ]">
                            <a-input v-model:value="connectFormState.username" />
                        </a-form-item>

                        <a-form-item label="密码" name="password" :rules="[
                            { required: true, message: 'Please input your password!' },
                        ]">
                            <a-input-password v-model:value="connectFormState.password" />
                        </a-form-item>

                        <a-form-item :wrapper-col="{ offset: 0, span: 24 }">
                            <a-button style="width: 100%" type="primary" html-type="submit">{{
                                t("public.Submit")
                            }}</a-button>
                        </a-form-item>
                    </a-form>
                </a-tab-pane>
                <a-tab-pane key="2" tab="SSH密钥认证" force-render>
                    <a-form :model="connectFormState" name="basic" @finish="on_connectFinish" :label-col="{ span: 4 }"
                        :wrapper-col="{ span: 20 }" autocomplete="off">
                        <a-form-item label="用户名" name="username" :rules="[
                            { required: true, message: 'Please input your username!' },
                        ]">
                            <a-input v-model:value="connectFormState.username" />
                        </a-form-item>
                        <a-form-item label="私钥" name="username" :rules="[
                            { required: true, message: 'Please input your username!' },
                        ]">
                            <a-textarea v-model:value="connectFormState.password">
                            </a-textarea>
                            <a-upload name="file" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                                <a-button>
                                    <upload-outlined></upload-outlined>
                                    Click to Upload
                                </a-button>
                            </a-upload>


                        </a-form-item>


                        <a-form-item :wrapper-col="{ offset: 0, span: 24 }">
                            <a-button style="width: 100%" type="primary" html-type="submit">{{
                                t("public.Submit")
                            }}</a-button>
                        </a-form-item>
                    </a-form>
                </a-tab-pane>
            </a-tabs>
            <!-- :loading="loading" -->
        </a-modal>
    </a-watermark>
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
import { useI18n } from "vue-i18n";
import { headMenu } from "./menu.ts"
import { useStore } from 'vuex'
import { UploadOutlined } from '@ant-design/icons-vue';
import xterm from "./components/xterm.vue"
const store = useStore()
const { t } = useI18n();

const connectKey = ref("1");
// let dataLength = ref(0);
let value = ref(1)

let connectOpen = ref<Boolean>(false);
let isConnect = ref<Boolean>(false);

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
watchEffect(() => { });

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
    isConnect.value = true;
    nextTick(() => {
        connectOpen.value = false;

    });
};
</script>
<style scoped lang='less'>
.content-style {
    padding: 20px;
    height: 100%;
}

.xterm-div {
    height: 100%;
}


.configuration-style {
    .configuration-nav {
        height: 40px;
        padding: 0 40px;
        line-height: 40px;
        background: #463e3e;
        color: #ffffff;
        font-size: 14px;

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