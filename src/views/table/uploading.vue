<template>
    <div class="tablePage-style">
        <a-button type="primary" @click="on_connect">连接设备</a-button>
        <a-row :gutter="[20, 0]">
            <a-col :span="12" class="file-local">
                <a-row class="path-style">
                    <a-col :span="6">
                        <ArrowLeftOutlined @click="on_Gouponelevel" />
                    </a-col>
                    <a-col :span="14">
                        <span class="path-text">{{ filePath.map((item: any) => item.name).join("/")
                        }}</span>
                    </a-col>
                    <a-col :span="4">
                        
                    </a-col>
                </a-row>

                <div class="directory-content">
                    <div v-for="(item, index) in fileArray" :key="index" @click="on_file(item, index, 1)"
                        @click.right="on_file(item, index, 1)" @dblclick="on_file(item, index, 2)"
                        :class="{ 'pitch-style': localChecked === index || shiftInndex == index }">
                        <a-dropdown :trigger="['contextmenu']">
                            <div draggable="true" @dragstart="dragstart" @dragenter="dragenter($event)"
                                @dragover="dragover($event, index, item)" @dragend="dragend" class="catalogue-item">
                                <FileFilled style="color:#ADADAD" v-if="item.kind === 'file'" />
                                <FolderOpenFilled style="color:#FFDA70" v-else-if="item.kind === 'directory'" />
                                <template v-if="rechristenIndex === index">
                                    <a-input ref="rechristenFer" v-model:value="rechristenValue"
                                        @blur="rechristenIndex = undefined" />
                                </template>
                                <template v-else>
                                    {{ item.name }}
                                </template>
                            </div>
                            <template #overlay>
                                <a-menu>
                                    <a-menu-item key="1" @click="on_rechristen(item, index)">重命名</a-menu-item>
                                    <a-menu-item key="2" @click="on_rechristen(item, index)">删除</a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>
                    </div>
                </div>
            </a-col>
            <a-col :span="12">col</a-col>
        </a-row>


        <!-- <a-modal v-model:open="open" title="选择文件" @ok="open = false" :maskClosable="false" width="50%" :footer="null">

        </a-modal> -->
    </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
// reactive

import { FolderOpenFilled, FileFilled, ArrowLeftOutlined } from '@ant-design/icons-vue';
// import { useStore } from 'vuex'
type FileType = {
    kind: string
    name: string
}
const open = ref<boolean>(false);
// const store = useStore()
const fileArray = ref<FileType[]>([]);
const filePath = ref<string[]>([])

let localChecked = ref<undefined | number>(undefined)
let shiftInndex = ref<undefined | number>(undefined)
let rechristenIndex = ref<undefined | number>(undefined)
let rechristenValue = ref<undefined | string>(undefined)
let rechristenFer = ref<any>(undefined)

const on_connect = async () => {
    console.log(fileArray)
    try {
        const pickerOpts = {
            excludeAcceptAllOption: true,
            multiple: true,
        };
        let handle = await window.showDirectoryPicker(pickerOpts);
        fileArray.value = await processHandle(handle);
        filePath.value.push(handle)
        // open.value = true
    } catch (error) {
        console.log(error);
    }
}

const dragstart = () => {
    console.log('dragstart')
}

const dragenter = (event: any) => {
    event.preventDefault()
}

const dragover = (event: any, index: number, item: FileType) => {
    if (item.kind === 'directory') {
        shiftInndex.value = index
        event.preventDefault()
    }
}

const dragend = () => {
    if (shiftInndex.value !== undefined) {
        console.log(fileArray.value[shiftInndex.value])
    }
    shiftInndex.value = undefined
}

/**
 * 重命名
 * @param item 重命名的文件
 * @param index 重命名的文件下标
 */
const on_rechristen = (item: FileType, index: number) => {
    rechristenValue.value = item.name;
    rechristenIndex.value = index
    nextTick(() => {
        rechristenFer.value[0].focus()
    })
}

/**
 * 返回上一级
 */
const on_Gouponelevel = async () => {
    filePath.value.pop()
    fileArray.value = await processHandle(filePath.value[filePath.value.length - 1]);
}
/**
 * 点击文件
 * @param fileItem 点击的文件
 * @param index 点击的文件下标
 * @param type 点击方式  1:单击  2:双击
 */
const on_file = async (fileItem: any, index: number, type: number) => {
    console.log(fileItem)
    localChecked.value = index
    if (type == 2) {
        localChecked.value = undefined
        if (fileItem.kind === 'directory') {
            fileArray.value = await processHandle(fileItem)
            filePath.value.push(fileItem)
        } else if (fileItem.kind === 'file') {
            const fileData = await fileItem.getFile();
            console.log(fileData);
            // 读文件数据
            const buffer = await fileData.arrayBuffer();
            // 转成Blod url地址
            let src = URL.createObjectURL(new Blob([buffer]));
            console.log(src)
        }
    }


}

/**
 * 根据目录获取目录下所有文件
 * @param handle 当前目录
 * @return fileArray 目录下文件 
 */
const processHandle = async (handle: any) => {
    if (handle.kind === 'file') return handle;
    let iter = handle.entries()
    let fileList: any = [];
    for await (let item of iter) {
        fileList.push(item[1]);
    }
    return fileList;
}

</script>

<style lang="less" scoped>
.file-local {
    .directory-content {
        margin-top: 10px;
        height: 50vh;
        overflow-y: auto;

        &>div {
            margin: 3px 0;
            padding: 4px;
        }

        .catalogue-item {
            display: flex;

            .anticon {
                margin-right: 5px;
            }
        }
    }

    .pitch-style {
        background-color: #CCE8FF;
        border: 1px solid #99D1FF;
    }
}

.path-style {
    padding: 2px 5px;
    border: 1px solid #585458;
    border-radius: 3px;

    .ant-col {
        margin: 0 5px;
        font-size: 18px;
        color: #333333;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .path-text {
        width: 100%;
        height: 100%;
        border-right: 1px solid #585458;
        border-left: 1px solid #585458;
    }


}
</style>