<template>
    <div class="tablePage-style">
        <a-button type="primary" @click="on_connect">连接设备</a-button>
        <a-modal v-model:open="open" title="选择文件" @ok="open = false" :maskClosable="false" width="50%" :footer="null">
            <a-row :gutter="[20, 0]">
                <a-col :span="12" class="file-local">
                    <div class="path-style">
                        <ArrowLeftOutlined @click="on_Gouponelevel"
                            :style="{ color: store.state.globalConfiguration.colorPrimary }" />
                        <span class="path-text">{{ filePath.map((item: any) => item.name).join("/") }}</span>
                    </div>
                    <div class="directory-content">
                        <div v-for="(item, index) in fileArray" :key="index" @click="on_file(item)">
                            <FileFilled :style="{ color: store.state.globalConfiguration.colorPrimary }"
                                v-if="item.kind === 'file'" />
                            <FolderOpenFilled :style="{ color: store.state.globalConfiguration.colorPrimary }"
                                v-else-if="item.kind === 'directory'" />
                            {{ item.name }}
                        </div> 
                    </div>
                </a-col>
                <a-col :span="12">col</a-col>
            </a-row>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { ref, } from 'vue';
// reactive

import { FolderOpenFilled, FileFilled, ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex'
// type FileType = {
//     kind: string
//     name: string
// }
const open = ref<boolean>(false);
const store = useStore()
const fileArray = ref<any>([]);
const filePath = ref<string[]>([])


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
        open.value = true
    } catch (error) {
        console.log(error);
    }
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
 */
const on_file = async (fileItem: any) => {
    console.log(fileItem)
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
    }
}

.path-style {
    display: flex;
    align-items: center;
    background-color: #F5F5F5;
    padding: 2px 5px;

    .path-text {
        margin-left: 10px;
        font-size: 16px;
        color: #333333;
    }

}
</style>