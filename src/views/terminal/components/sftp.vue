<template>
    <div class="catalogue-management">
        <div v-for="(item, index) in catalogueManagement" :key="index"
            :style="{ width: catalogueContainerWidth(), minWidth: catalogueContainerWidth() }"
            class="catalogue-container">
            <template v-if="item.type === 'catalogue' && item.catalogueList && item.catalogueList.length !== 0">
                <a-dropdown :trigger="['contextmenu']">
                    <div style="height: 100%;width: 100%;">
                        <div v-for="(el, ins) in item.catalogueList" :key="ins" class="catalogue-item"
                            :class="{ 'select-style': item.selected === ins }"
                            @click="onSelectcatalogue(el, ins, index)">
                            <a-dropdown :trigger="['contextmenu']">
                                <div class="items-center">
                                    <img v-if="el.IsDir" src='@/assets/img/folder.png' alt="">
                                    <img v-else src='@/assets/img/file.png' alt="">
                                    <a-input v-if="operateObj.col === index && operateObj.row === ins"
                                        v-model:value="inputValue" @blur="inputhandleBlur" />
                                    <div v-else class="file-text"
                                        :style="{ 'opacity': (el.Name && el.Name[0] === '.') ? 0.4 : 1 }">{{ el.Name
                                        }}</div>
                                </div>
                                <RightOutlined />
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item @click="onOperationList(el, 0, index, ins)">重命名</a-menu-item>
                                        <a-menu-item @click="onOperationList(el, 1, index, ins)">删除</a-menu-item>
                                        <a-menu-item @click="onOperationList(el, 2, index, ins)">复制</a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                        </div>
                    </div>

                    <!-- <template #overlay>
                        <a-menu>
                            <a-menu-item>新建文件</a-menu-item>
                        </a-menu>
                    </template> -->
                </a-dropdown>
            </template>
            <template v-else-if="item.type === 'file' && item.fileObj">
                131231
            </template>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, h} from "vue";
import { RightOutlined } from '@ant-design/icons-vue';
import { initSocket } from "@/common/method/socket"
import { secterm, } from "@/../secterm/secterm";
import { message, Modal } from 'ant-design-vue';
import {
    sectermConnectRequest,
    sectermFileListReq,
    SectermTeminaFileMove,
    SectermTeminaFileDelete,
    // sectermFileUploadReq,
    // sectermFileUploadFulfilleTheAllReq,
    // sectermFileCancelUploadReq
} from "@/common/method/proto";
const emit = defineEmits(["connectResult", 'tabName']);
const props = defineProps<{
    username: string
    password: string
    submitLoading: boolean
    host: string
    index: number
    port: number

}>();
onMounted(() => {
    socketConnect()
})
const v1 = secterm.v1;
let websocket = <any>(null);
let path = ref<string>(import.meta.env.VITE_Chard_Addr);
const [modal] = Modal.useModal();
const socketConnect = () => {
    let socket = initSocket(path.value, 5000, 'arraybuffer', onOpen, onData, onError, onClose);
    websocket = socket
}



const onData = async (msg: any) => {
    let sm = v1.SectermMessage.decode(new Uint8Array(msg.data));

    if (sm.secConnect) return connectManage(sm?.secConnect);
    if (sm?.secFile?.fileListRes && sm?.secFile?.fileListRes.FileInfo) return sftpfileList(sm?.secFile?.fileListRes.FileInfo)
    console.log(sm, "未知的消息类型")
};

const connectManage = (sm: secterm.v1.ISectermConnectMessage) => {
    if (sm.connectRes?.code != v1.SectermCode.LOGON_SUCCESS) {
        console.log("connect error deu to " + sm.connectRes?.code);
    } else {
        if (props.submitLoading) {
            emit("connectResult", false);
            localStorage.setItem("username", props.username);
            localStorage.setItem("password", props.password);
        }
    }
    sectermFileListReq("/opt", websocket)
    console.log("connect success!");
}

const onOpen = () => {
    const token: string | null = localStorage.getItem("token");
    let connectParams = {
        protocol: v1.SectermProtocols.SECTERM_SFTP,
        token: token,
        unmanaged: true,
        username: props.username,
        hostname: props.host,
        port: props.port,
        password: props.password,
    };
    console.log(connectParams)
    sectermConnectRequest(connectParams, websocket);
};

const onError = () => {
    if (props.submitLoading) {
        // emit("connectResult", true);
    }
    // message.error(t("socket.error"));
};
const onClose = () => {
    console.log("socket已经关闭");
};

type catalogueType = {
} & secterm.v1.ISectermFileInfo
type catalogueManagementTtype = {
    // path: string
    selected: number | undefined
    type: string
    catalogueList?: catalogueType[]
    fileObj?: fileObjType
}

type fileObjType = {
    name: string
    text: string
    creationTime?: string
    modificationTime?: string
}

const catalogueManagement = ref<catalogueManagementTtype[]>([]);
const sftpfileList = (fileListRes: catalogueType[]) => {
    console.log(fileListRes)
    fileListRes.sort((a, b) => {
        if (a.IsDir && !b.IsDir) return -1;
        if (!a.IsDir && b.IsDir) return 1;
        return 0;
    });
    catalogueManagement.value.push({
        // path: "./",
        type: 'catalogue',
        selected: undefined,
        catalogueList: fileListRes,
    })

}

let inputValue = ref<string | undefined | null>('');
//当前操作的文件
let operateFile = ref<catalogueType>({} as catalogueType);
//当前操作的列和行 
let operateObj = ref<{ row: number | undefined, col: number | undefined }>({ row: undefined, col: undefined });

/**
 * 
 * @param el 当前操作文件
 * @param type 操作类型 0 重命名 1 删除 2 复制
 * @param index 
 * @param ins 
 */
const onOperationList = (el: catalogueType, type: number, index: number, ins: number) => {
    operateFile.value = el
    console.log(el, type)
    operateObj.value.col = index
    operateObj.value.row = ins

    switch (type) {
        case 0:
            inputValue.value = el.Name
            break;
        case 1:
        deleteFile(`${operateFile.value.Path}/${operateFile.value.Name}`,operateFile.value.Name)
            break;
        case 2:
            break;
    }
}
const inputhandleBlur = () => {
    const folderNameRegex = /^[a-zA-Z0-9 _-]+$/;
    if (inputValue.value && folderNameRegex.test(inputValue.value)) {
        console.log("重命名")
        let path = `${operateFile.value.Path}/${operateFile.value.Name}`
        let DstPath = `${operateFile.value.Path}/${inputValue.value}`
        console.log(path, DstPath)
        SectermTeminaFileMove(path, DstPath, false, websocket)
        operateObj.value.col = undefined
        operateObj.value.row = undefined
    } else {
        message.error('请输入正确的文件名');
    }
}

const deleteFile = (path: string, name: string | null | undefined) => {
    modal.confirm({
        title: `确定删除-${name}`,
        content: h('div', { style: 'color:red;' }, '请谨慎操作'),
        onOk() {
            SectermTeminaFileDelete([path],websocket)
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
        class: 'test',
    });
}




const onSelectcatalogue = (el: catalogueType, ins: number, index: number) => {
    console.log(el, ins, index)
    if (el.IsDir) {
        //点击的是目录
        let path = `${el.Path}/${el.Name}`;
        catalogueManagement.value[index].selected = ins;
        index++
        catalogueManagement.value.splice(index)
        sectermFileListReq(path, websocket)
    }

}
const catalogueContainerWidth = () => {
    switch (catalogueManagement.value.length) {
        case 1:
            return '100%'
        case 2:
            return '50%'
        default:
            return '33%'
    }
}
</script>

<style lang="less" scoped>
.catalogue-management {
    display: flex;
    width: 90%;
    height: 90%;
    margin: auto;
    // position: fixed;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%, -50%);
    overflow-x: auto;
}

.catalogue-container {
    padding: 0 10px;
    overflow-x: auto;
    box-sizing: border-box;
    border-right: 2px solid #E3E3E3;
    box-sizing: border-box;
    color: #272727;
    font-size: 16px;
}

.catalogue-container:last-child {
    border-right: none;
}

.catalogue-item {
    padding: 5px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.catalogue-item img {
    width: 20px;
    height: auto;
    margin-right: 5px;
}


.select-style {
    background-color: #DBDCDC;
    border-radius: 5px;
}
</style>