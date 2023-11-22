<template>
    <div class="tablePage-style">
        <a-button type="primary" @click="on_connect">连接设备</a-button>
        <a-modal v-model:open="open" title="选择文件" @ok="open = false" :maskClosable="false" width="50%" :footer="null">
            <a-row class="graphical">
                <a-col :span="12" class="file-local">
                    <div>{{ }}</div>
                    <div v-for="(item, index) in fileArray" :key="index" @click="on_file(item)">
                        <FileOutlined :style="{ color: store.state.globalConfiguration.colorPrimary }"
                            v-if="item.kind === 'directory'" />
                        <FolderOpenOutlined :style="{ color: store.state.globalConfiguration.colorPrimary }"
                            v-else-if="item.kind === 'file'" />
                        {{ item.name }}
                    </div>
                </a-col>
                <a-col :span="12">col</a-col>
            </a-row>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { FileOutlined, FolderOpenOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex'
// type FileType = {
//     kind: string
//     name: string
// }
const open = ref<boolean>(false);

const store = useStore()
const fileArray = ref<any>([]);

// {
//         kind: "file",
//         name: "natives_blob.bin"
//     },
//     {
//         kind: "directory",
//         name: "二级"
//     },   

const on_connect = async () => {
    console.log(fileArray)
    try {
        const pickerOpts = {
            excludeAcceptAllOption: true,
            multiple: true,
        };
        let handle = await window.showDirectoryPicker(pickerOpts);
        fileArray.value = await processHandle(handle);
        console.log(fileArray)
        open.value = true
    } catch (error) {
        console.log(error);
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
        console.log(item)
        fileList.push(item[1]);
    }
    return fileList;
}
// FileType
const on_file = async (fileItem: any) => {
    console.log(fileItem)
    if (fileItem.kind === 'directory') {
        fileArray.value = await processHandle(fileItem)
    } else if (fileItem.kind === 'file') {
        // const file = fileItem.getFile()
        // const reader = new FileReader();
        // reader.onload = e => {
        //     // 读取结果
        //     console.log(e.target.result)
        // }
        // reader.readAsText(file, 'utf-8')
    }
}

</script>

<style lang="less" scoped>
.graphical {
    height: 60vh;
}

.file-local {
    display: flex;
    flex-direction: column;

}

.file-style {
    color: #333333;
    font-size: 16px;
}
</style>