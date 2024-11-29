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
                                    <img v-if="el.type === 'folder'" src='@/assets/img/folder.png' alt="">
                                    <img v-else-if="el.type === 'file'" src='@/assets/img/file.png' alt="">
                                    <a-input v-if="inputId === el.id" v-model:value="inputValue"
                                        @blur="inputhandleBlur" />
                                    <div v-else class="file-text">{{ el.text }}</div>


                                </div>
                                <RightOutlined />
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item @click="onOperationList(el, 0)">重命名</a-menu-item>
                                        <a-menu-item @click="onOperationList(el, 1)">删除</a-menu-item>
                                        <a-menu-item @click="onOperationList(el, 2)">复制</a-menu-item>
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
import { ref, onMounted, } from "vue";
import { RightOutlined } from '@ant-design/icons-vue';
onMounted(() => {
    console.log('3.-组件挂载到页面之后执行-------onMounted,index')
})

type catalogueManagementTtype = {
    name: string
    selected: number | undefined
    type: string
    catalogueList?: catalogueType[]
    fileObj?: fileObjType
}
type catalogueType = {
    text: string
    type: string
    id: string
}
type fileObjType = {
    name: string
    text: string
    creationTime?: string
    modificationTime?: string
}


const catalogueManagement = ref<catalogueManagementTtype[]>([
    {
        name: '文件1',
        selected: 1,
        type: "catalogue",
        catalogueList: [
            { text: '文件1-1', type: 'folder', id: `1` },
            { text: '文件1-2', type: 'folder', id: `2` },
            { text: '文件1-3', type: 'file', id: `3` }
        ]
    }
]);

let inputValue = ref<string>('');
let inputId = ref<string | undefined>(undefined);

const onOperationList = (el: catalogueType, type: number) => {
    console.log(el, type)
    inputId.value = el.id
    inputValue.value = el.text
}
const inputhandleBlur = () => {
    inputId.value = undefined
    inputValue.value = ""
}


const onSelectcatalogue = (el: catalogueType, ins: number, index: number) => {
    console.log(el, ins, index)
    console.log(catalogueManagement.value[index].selected)

    catalogueManagement.value[index].selected = ins;
    index++
    catalogueManagement.value.splice(index)
    if (el.type == 'folder') {
        catalogueManagement.value.push({
            name: `文件${index}`,
            selected: undefined,
            type: 'catalogue',
            catalogueList: [
                { text: `文件${index}-1`, type: 'folder', id: `${index}1` },
                { text: `文件${index}-2`, type: 'file', id: `${index}2` },
                { text: `文件${index}-3`, type: 'file', id: `${index}3` },
            ]
        })
    } else if (el.type == 'file') {
        catalogueManagement.value.push({
            name: `文件${index}`,
            selected: undefined,
            type: 'file',
            fileObj: {
                name: "文件名称",
                text: "文件内容",
                creationTime: "2023-05-09",
                modificationTime: "2024-11-29"
            }
        })
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
    width: 800px;
    height: 50vh;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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