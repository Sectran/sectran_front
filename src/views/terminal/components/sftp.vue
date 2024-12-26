<template>
    <input type="file" ref="fileInputRef" multiple style="display: none;" @change="startUploads" />
    <div class="sftp-container">
        <!-- <div class="shadeSty"></div> -->
        <div>
            <div class="sftp-left">
                <div v-for="(item, index) in leftNavigation" :key="index">
                    {{ item.name }}
                </div>
            </div>
            <div class="sftp-right">

                <div class="sftp-right-nav" @click="onTopInput">
                    <template v-if="topInput">
                        <a-input style="font-size: 16px;padding: 4px 0;" v-model:value="topInput" :bordered="false"
                            @blur="topInput = ''" ref="tagInputRef" />
                    </template>
                    <template v-else="topInput">
                        <template v-for="(item, index) in sftpNavTabs" :key="index">
                            <a-checkable-tag @click.stop="onTags(index)">
                                {{ item }}
                            </a-checkable-tag>
                            <RightOutlined v-if="index !== sftpNavTabs.length - 1" class="sftp-right-icon" />
                        </template>
                    </template>
                </div>
                <div class="catalogue-management" ref="catalogueManagementRef">
                    <div v-for="(item, index) in catalogueManagement" :key="index"
                        :style="{ width: catalogueContainerWidth(), minWidth: catalogueContainerWidth() }"
                        class="catalogue-container">
                        <template
                            v-if="item.type === 'catalogue' && item.catalogueList && item.catalogueList.length !== 0">
                            <a-dropdown :trigger="['contextmenu']">
                                <div style="height: 100%;width: 100%;">
                                    <div v-for="(el, ins) in item.catalogueList" :key="ins" class="catalogue-item"
                                        :class="{ 'select-style': item.selected.includes(el.Name as string) }"
                                        @click="onSelectcatalogue(el, ins, index)">
                                        <a-dropdown :trigger="['contextmenu']" @contextmenu.stop>
                                            <div class="items-center">
                                                <img v-if="el.IsDir" src='@/assets/img/folder.png' alt="">
                                                <img v-else src='@/assets/img/file.png' alt="">
                                                <a-input v-if="operateObj.col === index && operateObj.name === el.Name"
                                                    v-model:value="inputValue" @blur="inputhandleBlur" />
                                                <div v-else class="file-text"
                                                    :style="{ 'opacity': (el.Name && el.Name[0] === '.') ? 0.4 : 1 }">{{
                                                        el.Name
                                                    }}</div>
                                            </div>
                                            <RightOutlined />
                                            <template #overlay>
                                                <a-menu>
                                                    <a-menu-item
                                                        @click="onOperationList(el, 0, index, ins)">重命名</a-menu-item>
                                                    <a-menu-item
                                                        @click="onOperationList(el, 1, index, ins)">删除</a-menu-item>
                                                    <a-menu-item
                                                        @click="onOperationList(el, 2, index, ins)">剪切</a-menu-item>
                                                </a-menu>
                                            </template>
                                        </a-dropdown>
                                    </div>
                                </div>

                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item @click="onfolderOperation(item, index, 3)">新建文件</a-menu-item>
                                        <a-menu-item @click="onfolderOperation(item, index, 4)">上传文件</a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                        </template>
                        <template v-else-if="item.type === 'file' && item.fileObj">
                            131231
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <a-modal v-model:open="newFileShow" title="新建文件" ok-text="新建" cancel-text="取消" @ok="onOkNewFile">
        <a-form ref="formNewFileRef" :model="newFileFrom" layout="vertical" name="form_in_modal">
            <a-form-item name="fileName" :rules="[{ required: true, message: '请输入文件名' }]">
                <a-input v-model:value="newFileFrom.fileName" placeholder="请输入文件名" />
            </a-form-item>

            <a-form-item name="title">
                <a-select mode="tags" style="width: 100%" placeholder="请选择文件类型"
                    :options="[{ value: '1', label: '文件夹' }, { value: '2', label: '文本文件' }]"></a-select>
            </a-form-item>
        </a-form>
    </a-modal>



</template>
<script lang="ts" setup>
import { ref, onMounted, h, computed, onUnmounted, nextTick } from "vue";
import { RightOutlined } from '@ant-design/icons-vue';
import { initSocket } from "@/common/method/socket"
import { secterm, } from "@/../secterm/secterm";
import { message, Modal } from 'ant-design-vue';
import { useStore } from 'vuex'
import type { FormInstance } from 'ant-design-vue';
import {
    sectermConnectRequest,
    sectermFileListReq,
    SectermTeminaFileMove,
    SectermTeminaFileDelete,
    SectermTeminaFileCreate,
    sectermFileUploadFulfilleTheAllReq,
    sectermFileCancelUploadReq,
    sectermFileUploadReq
} from "@/common/method/proto";
import { fileUpload } from "@/api/admin.ts"



const emit = defineEmits(["connectResult", 'tabName']);
const props = defineProps<{
    username: string
    password: string
    submitLoading: boolean
    host: string
    index: number
    port: number

}>();
// 定义 Ctrl 键状态
const isCtrlPressed = ref(false);
// 定义事件处理函数
const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Control') {
        isCtrlPressed.value = true;
    }
};

const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Control') {
        isCtrlPressed.value = false;
    }
};


onMounted(() => {
    socketConnect()
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
})
onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
    window.removeEventListener('keyup', handleKeyUp);
});
const store = useStore()
const v1 = secterm.v1;
let websocket = <any>(null);
let path = ref<string>(import.meta.env.VITE_Chard_Addr);

let rootDirectory = 'opt'

//左侧导航数据
type LeftNavigationType = {
    path: string,
    name: string
}
let leftNavigation: LeftNavigationType[] = [
    { path: '/opt', name: '根目录' },
]






const socketConnect = () => {
    let socket = initSocket(path.value, 5000, 'arraybuffer', onOpen, onData, onError, onClose);
    websocket = socket
}

const onData = async (msg: any) => {
    let sm = v1.SectermMessage.decode(new Uint8Array(msg.data));
    console.log(sm.commonResponse?.code, "发送消息")
    if (sm.secConnect) return connectManage(sm?.secConnect);
    if (sm?.secFile?.fileListRes && sm?.secFile?.fileListRes.FileInfo) return sftpfileList(sm?.secFile?.fileListRes.FileInfo)
    if (sm.commonResponse?.message) return manageResponse(sm.commonResponse)
    console.log(sm, "未知的消息类型")
};

const manageResponse = (commonResponse: secterm.v1.ISectermCommonResponse) => {
    console.log(commonResponse.code)
    // === v1.CommonCode.SUCCES
    // if (commonResponse.message) {
    //     if (operateType === undefined) return
    //     if ([0, 1].includes(operateType) && operateObj.value.path) {
    //         sectermFileListReq(operateObj.value.path, websocket)
    //         operateType = undefined
    //     } else if (operateType === 4) {
    //         console.log(filesList)
    //         // filesList.shift()
    //         // sftpFileUploading()
    //     }
    // }
    // if (commonResponse.message === v1.CommonCode.ERROR) return message.error(commonResponse.message)
    if (commonResponse.code === v1.CommonCode.WARN) {
        message.warning(commonResponse.message)
        Modal.confirm({
            title: '警告',
            content: '文件重复，是否强制覆盖？',
            onOk() {
                sftpFileUploading(true)
            },
            onCancel() {
                filesList.shift()
                sftpFileUploading()
            },
            class: 'test',
        });
    }

}



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
    sectermFileListReq(`/${rootDirectory}`, websocket)
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
    path: string | null | undefined
    superiorsName: string | null | undefined
    selected: string[]
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
let superiorsName: string = rootDirectory
let cataloguePath = `/${rootDirectory}`
const catalogueManagementRef = ref<HTMLElement | null>(null);
const catalogueManagement = ref<catalogueManagementTtype[]>([]);
const sftpfileList = (fileListRes: catalogueType[]) => {
    fileListRes.sort((a, b) => {
        if (a.IsDir && !b.IsDir) return -1;
        if (!a.IsDir && b.IsDir) return 1;
        return 0;
    });
    console.log(superiorsName)
    if (operateObj.value.col !== undefined) {
        catalogueManagement.value[operateObj.value.col].catalogueList = fileListRes
        operateObj.value.col = undefined
    } else {
        catalogueManagement.value.push({
            superiorsName: superiorsName,
            path: cataloguePath,
            type: 'catalogue',
            selected: [],
            catalogueList: fileListRes,
        })
    }
    nextTick(() => {
        if (catalogueManagementRef.value) {
            console.log(catalogueManagementRef.value.scrollWidth)
            catalogueManagementRef.value.scrollLeft = catalogueManagementRef.value.scrollWidth;
        }
    });

}
const formNewFileRef = ref<FormInstance>();
let newFileShow = ref(false)
let newFileFrom = ref({
    fileName: '',
    fileType: 'file',
})

let operationItem = ref<catalogueManagementTtype>()
/**
 * 右键空白位置
 * @param item 点击的目录
 * @param index 目录下标
 * @param type 修改类型  3新建  4上传
 */
const onfolderOperation = (item: catalogueManagementTtype, index: number, type: number) => {
    operationItem.value = item
    operateType = type
    console.log(operationItem)
    console.log(item)
    console.log(index)
    if (type === 3) {
        newFileShow.value = true
    } else if (type === 4) {
        if (fileInputRef.value) {
            fileInputRef.value.click()
        }
    }
    console.log(item, index)
}

//新建文件
const onOkNewFile = () => {
    formNewFileRef.value?.validateFields()
        .then(values => {
            console.log('Received values of form: ', values);
            let fileName = values.fileName
            if (operationItem.value) SectermTeminaFileCreate({ Name: fileName, IsDir: false, Path: operationItem.value.path }, websocket)
        })
        .catch(info => {
            console.log('Validate Failed:', info);
        });
}
let inputValue = ref<string | undefined | null>('');
//当前操作的文件
let operateFile = ref<catalogueType>({} as catalogueType);
//当前操作的列和行 

type operateObjType = {
    row: number | undefined
    col: number | undefined
    name: string | undefined | null
    path: string | undefined | null
}

let operateObj = ref<operateObjType>({ row: undefined, col: undefined, name: undefined, path: undefined });
//做的什么操作 0重命名 1删除 2剪切
let operateType: number | undefined = undefined

/**
 * 
 * @param el 当前操作文件
 * @param type 操作类型 0重命名 1删除 2剪切
 * @param index 
 * @param ins 
 */
const onOperationList = (el: catalogueType, type: number, index: number, ins: number) => {
    operateType = type
    operateFile.value = el
    console.log(el, type)
    operateObj.value.col = index
    operateObj.value.path = el.Path
    console.log(catalogueManagement.value)
    switch (type) {
        case 0:
            inputValue.value = el.Name
            operateObj.value.row = ins
            operateObj.value.name = el.Name
            break;
        case 1:
            deleteFile(`${operateFile.value.Path}/${operateFile.value.Name}`, operateFile.value.Name)
            break;
        case 2:
            break;
    }
}
const inputhandleBlur = () => {
    const filenameRegex = /^[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)*$/;
    // if (inputValue.value && filenameRegex.test(inputValue.value)) {
    console.log("重命名")
    let path = `${operateFile.value.Path}/${operateFile.value.Name}`
    let DstPath = `${operateFile.value.Path}/${inputValue.value}`
    console.log(path, DstPath)
    SectermTeminaFileMove(path, DstPath, false, websocket)
    operateObj.value.row = undefined
    operateObj.value.name = undefined
    // } else {
    //     message.error('请输入正确的文件名');
    // }
}

const deleteFile = (path: string, name: string | null | undefined) => {
    Modal.confirm({
        title: `确定删除-${name}`,
        content: h('div', { style: 'color:red;' }, '请谨慎操作'),
        onOk() {
            SectermTeminaFileDelete([path], websocket)
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
        class: 'test',
    });
}
/**
 * 单击事件 文件
 * @param el 点击文件
 * @param ins 点击文件行
 * @param index 点击文件列
 */
const onSelectcatalogue = (el: catalogueType, ins: number, index: number) => {
    console.log(el, ins, index)

    //点击的是目录
    let path = `${el.Path}/${el.Name}`;
    superiorsName = el.Name as string
    console.log(path)
    cataloguePath = path
    if (isCtrlPressed.value) catalogueManagement.value[index].selected.push(el.Name as string);
    else catalogueManagement.value[index].selected = [el.Name as string];
    if (el.IsDir) {
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
const styleBackgroundColor = computed(() => store.state.globalConfiguration.colorPrimary);

const sftpNavTabs = computed(() => {
    return catalogueManagement.value.map((item: catalogueManagementTtype) => item.superiorsName)
})

let topInput = ref('')
const onTags = (index: number) => {
    console.log(index)
    console.log(catalogueManagement.value[index])
    // catalogueManagement.value[index].selected = undefined;
    catalogueManagement.value.splice(index++);
}
let tagInputRef = ref<any>(null)
const onTopInput = () => {
    topInput.value = sftpNavTabs.value.join("/")
    nextTick(() => {
        tagInputRef.value?.focus();
    })
    console.log(topInput.value)
}



let fileInputRef = ref<HTMLInputElement>();
//文件列表
let filesList: File[] = ([])
const startUploads = async (event: any) => {
    console.log(event.target.files, 'event.target.files');
    if (event.target.files.length !== 0) {
        filesList = event.target.files
        console.log(filesList, 'filesList');
        sftpFileUploading()
        if (fileInputRef.value) {
            (fileInputRef.value as HTMLInputElement).value = '';
        }

    } else {
        sectermFileCancelUploadReq(websocket)
        console.log("未选择文件");
    }
}

const sftpFileUploading = (cover?: boolean) => {
    if (filesList.length > 0) {
        let firstElement = filesList[0];
        makeRequest(firstElement, cover)
    } else {
        sectermFileUploadFulfilleTheAllReq(websocket)
    }
}

const makeRequest = async (file: File, cover = false) => {
    const formData = new FormData();
    formData.append('file', file);
    await fileUpload(formData).then(async (res: { data: string }) => {
        let FileUploadReqData: secterm.v1.SectermFileTransReq = {
            uuid: res.data,
            upload: true,
            cover,
            filename: file.name,
            filepath: operationItem.value?.path as string,
            proto: secterm.v1.TransProtocol.ZMODEM,
            mode: secterm.v1.ActionMode.ACTIVE,
            toJSON: function (): { [k: string]: any; } {
                throw new Error("Function not implemented.");
            }
        }
        return sectermFileUploadReq(FileUploadReqData, websocket)
    })
}

</script>

<style lang="less" scoped>
.sftp-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .shadeSty {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        // background-color: red;
    }

    &>div {
        width: 95%;
        height: 95%;
        display: flex;
    }

    .sftp-left {
        padding-top: 40px;
        height: 100%;
        width: 180px;

        &>div {
            cursor: pointer;
        }

        &>div:hover {
            color: v-bind(styleBackgroundColor);
        }
    }

    .sftp-right {
        flex: 1;
        height: 100%;
    }
}



.catalogue-management {
    border-left: 1px solid #f7f7f7;
    display: flex;
    flex: 1;
    height: calc(100% - 30px);
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
    border-radius: 5px;
    cursor: pointer;

}

.catalogue-item img {
    width: 20px;
    height: auto;
    margin-right: 5px;

}

.catalogue-item:hover {
    background-color: #DBDCDC;
}

.select-style {
    background-color: v-bind(styleBackgroundColor) !important;
    color: #ffffff;
}

.sftp-right-nav {
    height: 40px;
    display: flex;
    width: 100%;
    border: 1px solid #d9d9d9;
    padding: 0 11px;
    box-sizing: border-box;
    border-radius: 6px;
    align-items: center;
    margin-bottom: 10px;

    .ant-tag {
        font-size: 16px;
        margin-inline-end: 0px;
        padding-inline: 0px;
    }

    .sftp-right-icon {
        padding: 0 5px;
        font-size: 10px;
    }

}
</style>