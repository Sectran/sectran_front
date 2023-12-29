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
            <div class="Content-style">
                <div class="Content-left">
                    <a-directory-tree multiple default-expand-all @select="on_node">
                        <a-tree-node key="0-0" title="Default">
                            <a-tree-node key="0-0-0" title="Linux" is-leaf />
                        </a-tree-node>
                    </a-directory-tree>
                </div>
                <div class="Content-right">
                    <div class="xterm-div" v-if="xtermList.length !== 0">
                        <!-- @edit="onEdit" -->
                        <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" :forceRender="true">
                            <a-tab-pane v-for="(item,index) in xtermList" :key="index" :tab="item.name" :closable="true">
                                <!-- <div style="height: 30px;">1312312</div> -->
                                <xterm :username="item.username" :password="item.password"></xterm>
                            </a-tab-pane>
                            <!-- <template #rightExtra>
                                <div class="tab-right">
                                    <PlusSquareOutlined class="nav-icon" />
                                </div>
                            </template> -->
                        </a-tabs>
                    </div>

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
                </div>
            </div>
        </div>

        <!-- @ok="handleOk" -->
        <!-- @click="handleOk" -->
        <a-modal v-model:open="connectOpen" title="链接 Linux" :footer="null" :width="800">
            <a-form :model="connectFormState" name="basic" @finish="on_connectFinish" :label-col="{ span: 3 }"
                :wrapper-col="{ span: 21 }" autocomplete="off">

                <a-form-item label="网络连接" name="network">
                    <a-radio-group v-model:value="connectFormState.network">
                        <a-radio :value="1">101.133.229.239（公网）</a-radio>
                        <a-radio :value="2">172.27.101.182（私网）</a-radio>
                        <a-radio :value="3">运维安全中心</a-radio>
                    </a-radio-group>
                </a-form-item>

                <a-form-item label="认证方式" name="attestationType">
                    <a-radio-group v-model:value="connectFormState.attestationType">
                        <a-radio :value="1">密码认证</a-radio>
                        <a-radio :value="2">SSH密钥认证</a-radio>
                    </a-radio-group>
                </a-form-item>

                <template v-if="connectFormState.attestationType === 1">
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
                </template>

                <template v-else-if="connectFormState.attestationType === 2">
                    <a-form-item label="用户名" name="username" :rules="[
                        { required: true, message: 'Please input your username!' },
                    ]">
                        <a-input v-model:value="connectFormState.username" />
                    </a-form-item>
                    <a-form-item label="私钥" name="password" :rules="[
                        { required: true, message: 'Please input your username!' },
                    ]">
                        <div>
                            <div class="private-key">
                                <a-textarea class="textarea-style" :autosize="false"
                                    v-model:value="connectFormState.password">
                                </a-textarea>
                                <a-form-item-rest>

                                    <a-upload name="file" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                                        <a-button>
                                            <upload-outlined></upload-outlined>
                                        </a-button>
                                    </a-upload>
                                </a-form-item-rest>
                                <div class="shibboleth-style">
                                    <div class="shibboleth-text">
                                        私钥口令：
                                    </div>
                                    <a-form-item-rest>
                                        <a-input class="shibboleth-input" v-model:value="connectFormState.password"
                                            placeholder="Basic usage">
                                            <template #prefix>
                                                <LockOutlined />
                                            </template>
                                        </a-input>
                                    </a-form-item-rest>
                                </div>

                            </div>

                        </div>
                    </a-form-item>
                </template>
                <a-form-item :wrapper-col="{ offset: 0, span: 24 }">
                    <a-button style="width: 100%" type="primary" html-type="submit">{{
                        t("public.Submit")
                    }}</a-button>
                </a-form-item>

            </a-form>

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
// PlusSquareOutlined
import { UploadOutlined, LockOutlined, } from '@ant-design/icons-vue';
import xterm from "./components/xterm.vue"

type XtermList = {
    name: string
    username: string
    password: string
}

const store = useStore()
const { t } = useI18n();
let connectOpen = ref<Boolean>(false);

const activeKey = ref(0);
let xtermList: XtermList[] = []
// { name: '1_root@iZuf64kquo56ciwmfp', username: "root", password: "Ryan@1218pass" }

onBeforeMount(() => {
});
onMounted(() => {
    window.addEventListener("beforeunload", (e: any) => {
        e.returnValue = "您确定要离开吗？请确认是否保存您的更改。";
        e.preventDefault();
    });
});
watchEffect(() => { });

const on_node = () => {
    connectOpen.value = true;
};

interface ConnectFormState {
    username: string;
    password: string;
    attestationType: number
    network: number
}

const connectFormState = reactive<ConnectFormState>({
    username: "",
    password: "",
    attestationType: 1,
    network: 1,
});

const on_connectFinish = () => {
    let { username, password } = connectFormState
    
    nextTick(() => {
        xtermList.push({username,password,name: '1_root@iZuf64kquo56ciwmfp'})
        connectOpen.value = false;
    });
};
</script>
<style scoped lang='less'>
.xterm-div {
    height: 100%;
}

::v-deep(.ant-tabs) {
    height: 100%;

    .ant-tabs-content {
        height: 100%;
    }
}

.private-key {
    display: flex;

    .textarea-style {
        height: 80px;
        border-radius: 6px 0 0 6px;
        border-right: none;

    }

    button {
        height: 100%;
        border-radius: 0 6px 6px 0;
    }

    .shibboleth-style {
        display: flex;
        margin-left: 40px;
        align-items: center;

        .shibboleth-text {
            white-space: nowrap;
        }

        .shibboleth-input {
            width: 200px;
            height: 45px;
        }
    }

    ::v-deep(.ant-upload) {
        height: 100%;
    }
}


.configuration-style {

    .configuration-nav {
        height: 40px;
        padding: 0 40px;
        line-height: 40px;
        background: #463e3e;
        color: #ffffff;
        font-size: 14px;

        ::v-deep(.ant-dropdown-link) {
            margin-right: 20px;
        }
    }

    .Content-style {
        height: calc(100vh - 40px);
        display: flex;

        .Content-left {
            width: 300px;
            background: #2f2a2a;
            padding: 20px;

            // height: 100%;
            ::v-deep(.ant-tree-list) {
                background: #2f2a2a;
                color: #ffffff;
            }
        }

        .Content-right {
            flex: 1;
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

.tab-right {
    padding-right: 20px;

}
</style>