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
            <div class="Content-style">
                <div class="Content-left " :style="{ width: `${leftWidth}px` }"
                    :class="[isSpread ? 'Content-left-lessen' : '', transitionClass ? 'transition-style' : '']">
                    <div class="Content-left-search">
                        <MenuUnfoldOutlined class="menu-icon" @click="isSpread = !isSpread" />
                        <div class="search-sty" v-if="!isSpread">
                            <a-input :bordered="false" placeholder="" />
                            <SearchOutlined class="search-icon" />
                        </div>
                    </div>
                    <div class="Content-left-tree" v-if="!isSpread" @scroll="handleScroll">
                        <div v-for="(item, index) in treeData" :key="index" class="tree-node" :ref="treeRefArr[index]">
                            <div class="items-center tree-parent-node" @click="item.isUnfold = !item.isUnfold">
                                <DownOutlined  v-if="item.isUnfold"
                                    class="unfold-icon" />
                                <RightOutlined  v-else class="unfold-icon" />
                                <img v-if="item.icon === 'linux'" src='@/assets/img/linux.png' alt="">
                                <img v-if="item.icon === 'windows'" src='@/assets/img/windows.png' alt="">
                                <div>
                                    {{ item.title }}
                                </div>
                            </div>
                            <template v-if="item.isUnfold">
                                <div v-for="(child, ins) in item.children" :key="ins" class="tree-child-node"
                                    @click="connectName = child.name; connectOpen = true">
                                    {{ child.name }}
                                </div>
                            </template>
                        </div>

                    </div>

                </div>
                <div class="resize-style" @mousedown="mouseDown"></div>

                <div class="Content-right">

                    <!-- <xterm @connectResult="connectResult" :submitLoading="submitLoading.valueOf" /> -->
                    <div class="xterm-div" v-if="multiList.length !== 0">
                        <a-tabs v-model:activeKey="multiActiveKey" hide-add type="editable-card" :forceRender="false"
                            @edit="onTabsEdit">
                            <a-tab-pane v-for="item in multiList" :key="item.key" :tab="item.name" :closable="true"
                                class="tab-pane">
                                <xterm @connectResult="connectResult" :submitLoading="submitLoading.valueOf"
                                    :username="item.username" :password="item.password" />
                            </a-tab-pane>
                            <template #rightExtra>
                                <div class="tab-right">
                                    <!-- <PlusSquareOutlined class="nav-icon" /> -->
                                </div>
                            </template>
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

        <a-modal v-model:open="connectOpen" :title='`连接${connectName}`' :footer="null" :width="800">
            <a-watermark v-bind="store.state.globalConfiguration.watermarkConfiguration">
                <a-form :model="connectFormState" name="basic" @finish="on_connectFinish" :label-col="{ span: 3 }"
                    :wrapper-col="{ span: 21 }" autocomplete="off">
                    <a-form-item label="登录方式" name="network">
                        <a-radio-group v-model:value="connectFormState.network">
                            <a-radio :value="1">手动登录</a-radio>
                            <a-radio :value="2">自动登录</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <template v-if="connectFormState.network === 1">
                        <a-form-item label="认证方式" name="attestationType">
                            <a-radio-group v-model:value="connectFormState.attestationType">
                                <a-radio :value="1">密码认证</a-radio>
                                <a-radio :value="2">SSH密钥认证</a-radio>
                            </a-radio-group>
                        </a-form-item>

                        <template v-if="connectFormState.attestationType === 1">
                            <a-form-item label="账号" name="username"
                                :rules="[{ required: true, message: 'Please input your username!' }]">
                                <a-input v-model:value="connectFormState.username" />
                            </a-form-item>

                            <a-form-item label="密码" name="password"
                                :rules="[{ required: true, message: 'Please input your password!' }]">
                                <a-input-password v-model:value="connectFormState.password" />
                            </a-form-item>
                            <!-- <a-form-item name="remember" :wrapper-col="{ offset: 1, span: 16 }">
                            <a-checkbox v-model:checked="connectFormState.remember">记住我</a-checkbox>
                        </a-form-item> -->
                        </template>
                        <template v-else-if="connectFormState.attestationType === 2">
                            <a-form-item label="用户名" name="username"
                                :rules="[{ required: true, message: 'Please input your username!' }]">
                                <a-input v-model:value="connectFormState.username" />
                            </a-form-item>
                            <a-form-item label="私钥" name="password"
                                :rules="[{ required: true, message: 'Please input your username!' }]">
                                <div>
                                    <div class="private-key">
                                        <a-textarea class="textarea-style" :autosize="false"
                                            v-model:value="connectFormState.password">
                                        </a-textarea>
                                        <a-form-item-rest>

                                            <a-upload name="file"
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
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
                                                <a-input class="shibboleth-input"
                                                    v-model:value="connectFormState.password" placeholder="Basic usage">
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
                    </template>
                    <a-form-item :wrapper-col="{ offset: 0, span: 24 }">
                        <a-button :loading="submitLoading" style="width: 100%" type="primary" html-type="submit">
                            {{ t("public.Submit") }}
                        </a-button>
                    </a-form-item>

                </a-form>
            </a-watermark>
            <!-- :loading="loading" -->
        </a-modal>
    </a-watermark>
</template>


<script setup lang='ts'>
import {
    onMounted,
    ref,
    reactive,
    createVNode,
    onUnmounted
} from "vue";
import { useI18n } from "vue-i18n";
import { headMenu } from "./menu.ts"
import { useStore } from 'vuex'
// PlusSquareOutlined
import { deviceList } from "@/api/admin"
import { UploadOutlined, LockOutlined, SearchOutlined, RightOutlined, DownOutlined } from '@ant-design/icons-vue';
import xterm from "./components/xterm.vue"
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import { resTable } from "@/common/type/type"
import { MenuUnfoldOutlined, } from '@ant-design/icons-vue';
import { throttle } from 'lodash';
type MultiList = {
    name: string
    username: string
    password: string
    key: number
}
type TableType = {
    name: string
    host: string
    id: number
}

const store = useStore()
const { t } = useI18n();
let isSpread = ref<boolean>(false);
let connectOpen = ref<Boolean>(false);
let connectName = ref<string>('')
const submitLoading = ref<Boolean>(false);
const multiActiveKey = ref(1);
const soleKey = ref<number>(0);
let multiList = ref<MultiList[]>([])

let transitionClass = ref<Boolean>(true)
const treeData = ref<any>([
    {
        title: 'Linux',
        key: '0-0',
        icon: "linux",
        isUnfold: false,
        children: [],
    }, {
        title: 'Windows',
        key: '0-1',
        icon: "windows",
        isUnfold: false,
        children: [],
    },

]);

onMounted(() => {
    document.addEventListener('mouseup', handleMoveThrottled)
    window.addEventListener("beforeunload", (e: any) => {
        e.returnValue = "您确定要离开吗？请确认是否保存您的更改。";
        e.preventDefault();
    });

    for (let index = 0; index < treeData.value.length; index++) {
        deviceList({ page: 1, pageSize: 100, type: treeData.value[index].title }).then((res: { data: resTable<TableType[]> }) => {
            console.log(res)
            let { data } = res.data
            treeData.value[index].children = data
        })
    }
});


onUnmounted(() => {
    document.removeEventListener('mouseup', handleMoveThrottled)
})
let treeRefArr = ref([ref(null), ref(null)])

const handleScroll = (event: any) => {
    console.log(event)
    // const target = event.target;
    // console.log(target.scrollTop)
    // let treeRef = document.querySelector(`Linux`)
    // console.log(treeRefArr.value[1].value[0].scrollTop)
};


let leftWidth = ref<number>(300);
//拖动改变宽度
// 鼠标移动事件，将鼠标指针相对于屏幕的 X 轴坐标赋值给需要动态变化的元素宽度
const mouseMove = (event: any) => {
    if (event.screenX > 200 && event.screenX < 500) leftWidth.value = event.screenX

}
// 鼠标按下事件
const mouseDown = (event: any) => {
    document.addEventListener('mousemove', mouseMove)
    transitionClass.value = false
    leftWidth.value = event.screenX
}
// 鼠标释放事件
const mouseUp = () => {
    transitionClass.value = true
    const moveX = leftWidth.value > 500 ? 500 : leftWidth.value < 200 ? 200 : leftWidth.value
    leftWidth.value = moveX
    document.removeEventListener('mousemove', mouseMove)
}
// 鼠标释放节流事件
const handleMoveThrottled = throttle(mouseUp, 0)


// const onNode = () => {
//     let username = localStorage.getItem('username');
//     let password = localStorage.getItem('password');
//     if (username && password) {
//         connectFormState.username = username
//         connectFormState.password = password
//     }
//     connectOpen.value = true;
// };

interface ConnectFormState {
    username: string;
    password: string;
    attestationType: number
    network: number
    remember: boolean
}

const connectFormState = reactive<ConnectFormState>({
    username: "",
    password: "",
    attestationType: 1,
    network: 1,
    remember: false
});

const on_connectFinish = () => {
    let { username, password } = connectFormState
    soleKey.value++
    multiList.value.push({ username, password, name: '1_root@iZuf64kquo56ciwmfp', key: soleKey.value })
    multiActiveKey.value = soleKey.value
    submitLoading.value = true
};

const onTabsEdit = (targetKey: number) => {
    Modal.confirm({
        title: '再次确认?',
        icon: createVNode(ExclamationCircleOutlined),
        content: '是否要关闭标签，关闭后将失去所有消息，请谨慎操作！',
        onOk() {
            let targetKeyIndex = multiList.value.findIndex((item: MultiList) => item.key === targetKey) - 1
            multiList.value = multiList.value.filter((item: MultiList) => item.key !== targetKey)
            if (multiList.value.length !== 0 && multiActiveKey.value === targetKey) {
                if (targetKeyIndex >= 0) {
                    multiActiveKey.value = multiList.value[targetKeyIndex].key;
                } else {
                    multiActiveKey.value = multiList.value[0].key;
                }
            }
        },
        onCancel() { },
    });
}

const connectResult = (modalState: boolean) => {
    submitLoading.value = false
    connectOpen.value = modalState
}

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
    min-width: 1000px;

    .configuration-nav {
        height: 40px;
        padding: 0 40px;
        line-height: 40px;
        background: #463e3e;
        color: #ffffff;
        font-size: 14px;
        box-sizing: border-box;

        ::v-deep(.ant-dropdown-link) {
            margin-right: 20px;
        }
    }

    .Content-style {
        height: calc(100vh - 40px);
        display: flex;

        .Content-left-lessen {
            width: 60px !important;

        }

        .transition-style {
            transition: width 0.3s;
        }

        .Content-left {
            background: #181818;
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 20px 10px;
            box-sizing: border-box;

            .Content-left-search {
                display: flex;
                justify-content: space-between;
                height: 30px;

                .menu-icon {
                    color: #ffffff;
                    font-size: 18px;
                }
            }

            .Content-left-tree {
                flex: 1;
                overflow-y: auto;
                scrollbar-color: #434343 #181818;
            }

            .Content-left-icon {
                height: 80px
            }
        }

        .Content-right {
            flex: 1;

            ::v-deep(.ant-tabs-nav) {
                margin: 0;
            }

            // ::v-deep(.ant-tabs-tab-active) {
            //     background: #2E445C;
            //     color: #ffffff;
            //     border-radius:0;
            // }
            // ::v-deep(.ant-tabs-ink-bar) {
            //     background: #2E445C;
            // }

            .item-nav-style {
                background: #2E445C;
                color: #ffffff;
                font-size: 16px;
                padding: 0 20px;
                height: 30px;
                line-height: 30px;

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

.tab-pane {
    display: flex;
    flex-direction: column;

}

.tab-right {
    padding-right: 20px;
}

.unfold-icon {
    font-size: 16px;
    color: #ffffff;
}

.tree-node {
    color: #ffffff;
    margin-bottom: 10px;

    img {
        width: 20px;
        height: auto;
        margin: 0 5px;
    }

    .tree-parent-node {
        font-size: 16px !important;
        background-color: #181818;
    }

    .tree-child-node {
        margin: 5px 0 5px 40px;
    }

}


.search-sty {
    color: #333;
    width: auto;
    border-radius: 20px;
    height: 100%;
    display: inline-block;
    position: relative;
    overflow: hidden;
    // background-image: linear-gradient(315deg, #6772FF 0, #00F9E5 100%);
    background-color: #ffffff;
    background-size: 104% 104%;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.search-icon {
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
    height: 100%;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    color: #333333;
}

.search-sty input {
    display: inline-block;
    background: 0 0;
    border: none;
    padding-left: 20px;
    box-sizing: border-box;
    width: 50px;
    vertical-align: 4px;
    font-size: 16px;
    transition: all .2s linear;
}

.search-sty:hover input {
    display: inline-block;
    width: 250px;
    padding-right: 50px;
}

.search-sty input:not(:placeholder-shown) {
    display: inline-block;
    width: 250px;
    padding-right: 50px
}

.resize-style {
    width: 2px;
    background-color: #ffffff;
    height: 100%;
    cursor: w-resize;
}
</style>
