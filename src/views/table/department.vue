<template>
    <div class="tablePage-style">
        <div class="table-nav">
            <div class="search-style">
                <a-dropdown>
                    <a class="ant-dropdown-link" @click.prevent>
                        <DownOutlined />
                    </a>
                    <template #overlay>
                        <a-menu @click="handleMenuClick">
                            <a-menu-item v-for="item in searchFronModel" :key="item">{{ t(item.name)
                                }}</a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
                <div class="tags-style">
                    <a-tag v-for="(item, index) in searchTags" :key="index" closable
                        @close="() => searchTags.splice(index, 1)">
                        <a-tooltip>
                            <template #title>{{ t(item.name) }}：{{ item.value }}</template>
                            <span class="tags-style-text">{{ t(item.name) }}：{{ item.value }}</span>
                        </a-tooltip>
                    </a-tag>
                </div>
                <div class="input-text" v-if="searchModelItem">{{ t(searchModelItem.name) }} :</div>
                <a-input class="search-style-input"
                    v-show="searchModelItem?.key === 'name' || searchModelItem?.key === 'description'"
                    v-model:value="searchInputValue" :bordered="false" @pressEnter="onInputTag">
                    <template #suffix>
                        <SearchOutlined @click="onInputTag" />
                    </template>
                </a-input>
                <a-cascader class="search-style-input" v-show="searchModelItem?.key === 'area'"
                    v-model:value="searchcascaderValue" :bordered="false"
                    :fieldNames="{ label: 'name', value: 'name', children: 'children' }" :options="TestJson"
                    :show-search="{ filter }" @change="changeCascader" />
            </div>

            <a-button :icon="h(SearchOutlined)" @click="onSearch()" type="primary">
                {{ t('public.search') }}
            </a-button>
            <a-button class="search-" @click="searchTags = []; onSearch()" :icon="h(SyncOutlined)">
                {{ t('public.reset') }}
            </a-button>
        </div>

        <div class="table-style">
            <a-space class="mb8 justify-end">
                <a-button @click="onAddSubordinateDepartment()" :icon="h(PlusOutlined)" type="primary">{{
                            t('public.add')
                        }}</a-button>
                <a-dropdown-button trigger='click'>
                    {{ t('public.columnShow') }}
                    <template #overlay>
                        <a-menu>
                            <a-checkbox-group v-model:value="columnsCheckboxArray" @change="changeColumnsCheckbox">
                                <div>
                                    <div class="table-style-columnsCheckbox" v-for="item in columns" :key="item.title">
                                        <a-checkbox :value="item.dataIndex">
                                            {{ t(item.title) }}
                                        </a-checkbox>
                                    </div>
                                </div>
                            </a-checkbox-group>
                        </a-menu>
                    </template>
                </a-dropdown-button>
            </a-space>
            <!-- :scroll="{ y: 400 }" -->
            <a-table :columns="columns" :data-source="tableList" class="components-table-demo-nested" ref="tableRef"
                :pagination="false" :loading="loading" rowKey="id" bordered :indentSize="5" @expand="expandTable">
                <template #headerCell="{ column }">
                    <span v-if="column && typeof column.title === 'string'">{{ t(column.title) }}</span>
                </template>
                <template #bodyCell="{ column, record, text, index }">
                    <template v-if="column.dataIndex === 'name'">
                        <a width="200" href="javascript:;">{{ text }}</a>
                    </template>
                    <template v-if="column.dataIndex === 'updatedAt'">
                        {{ dayjs(text).format("YYYY-MM-DD HH:mm:ss") }}
                    </template>
                    <template v-if="column.dataIndex === 'operation'">
                        <a-space :size="8">
                            <a-button type="link" @click="onRedactDepartment(record)">{{ t('public.redact')
                                }}</a-button>
                            <a-button type="link" @click="onAddSubordinateDepartment(record)">
                                {{ t('department.addSubordinateDepartment') }}
                            </a-button>
                            <a-button type="link" danger @click="onDelete(record, index)">{{ t('public.delete')
                                }}</a-button>
                        </a-space>
                    </template>
                </template>
            </a-table>
        </div>
        <a-modal v-model:open="openState" title="添加部门" :footer='null'
            :after-close="() => { submitFormRef?.resetFields(); departmentId = undefined; editRecord = {} }">
            <a-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }"
                ref="submitFormRef" autocomplete="off" @finish="onFinish">
                <a-form-item :label="t('department.departmentName')" name="name"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('department.departmentName')}` }]">
                    <a-input v-model:value="formState.name"
                        :placeholder='`${t("public.pleaseInput")}${t("department.departmentName")}`' />
                </a-form-item>
                <a-form-item :label="t('department.departmentLocation')" name="area"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('department.departmentLocation')}` }]">
                    <a-cascader :fieldNames="{ label: 'name', value: 'name', children: 'children' }"
                        v-model:value="formState.area" :options="TestJson" :show-search="{ filter }"
                        :placeholder='`${t("public.pleaseInput")}${t("department.departmentLocation")}`' />
                </a-form-item>
                <a-form-item :label="t('department.departmentDescribe')" name="description">
                    <!-- :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('department.departmentDescribe')}` }]" -->
                    <a-input v-model:value="formState.description"
                        :placeholder='`${t("public.pleaseInput")}${t("department.departmentDescribe")}`' />
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
                    <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted, reactive, h } from 'vue';
import { listDepartment, addDepartment, editDepartment, deleteDepartment } from "@/api/admin";
import { resTable } from "@/utils/type/type"
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import type { FormInstance } from 'ant-design-vue';

import { PlusOutlined, DownOutlined, SearchOutlined, SyncOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import TestJson from "@/assets/json/region.json";
import type { ShowSearchType } from 'ant-design-vue/es/cascader';
import { SearchFronModel, Columns } from "@/utils/type/type"
type Tableitem = {
    id: number
    key: number
    area: string
    hasChildren: boolean
    parentDepartments: string
    children?: Tableitem[]
}

interface FormState {
    id?: number
    area: string[]
    description: string
    name: string
    parentDepartmentId: number | string
}

const submitFormRef = ref<FormInstance>();
const { t } = useI18n()
const tableRef = ref();
let page = ref<number>(1);
let pageSize = ref<number>(20);
let tableList = ref<any>([])
let loading = ref<boolean>(false)
let openState = ref<boolean>(false)
const departmentId = ref<number | undefined>(undefined);
const formState = reactive<FormState>({
    area: [],
    description: "",
    name: "",
    parentDepartmentId: 1,
});
let searchFrom = reactive({
    name: "",
    description: "",
    area: ""
})
const searchTags = ref<SearchFronModel[]>([])
let searchInputValue = ref<string | number>("")
let searchcascaderValue = ref<string[]>([])
const searchFronModel: SearchFronModel[] = [
    {
        key: 'name',
        name: "department.departmentName"
    }, {
        key: 'description',
        name: "department.departmentDescribe"
    }, {
        key: 'area',
        name: "department.departmentLocation"
    }
]
let searchModelItem = ref<SearchFronModel>()
const handleMenuClick = (item: { key: SearchFronModel }) => {
    searchModelItem.value = item.key
}

const onInputTag = () => {
    if (searchInputValue.value && searchModelItem.value) {
        operateTags(searchInputValue.value)
        searchInputValue.value = ""
    }
}

const changeCascader = () => {
    if (searchcascaderValue.value) {
        operateTags(searchcascaderValue.value.join("/"))
    }
}
/**
 * 操作tags
 * @param value 值
 */
const operateTags = (value: string | number) => {
    let tagsIndex = searchTags.value.findIndex((item: SearchFronModel) => item.key === searchModelItem.value?.key)
    if (searchModelItem.value) {
        let tags: SearchFronModel = {
            ...searchModelItem.value,
            value,
        }
        if (tagsIndex !== -1) {
            searchTags.value.splice(tagsIndex, 1, tags);
        } else {
            searchTags.value.push({ ...tags })
        }
    }
}

/**
 * 展开行
 * @param expanded 展开/关闭
 * @param record 点击行数据
 */
const expandTable = async (expanded: boolean, record: Tableitem) => {
    console.log(expanded, record)
    if (expanded && record.children?.length === 0) {
        loading.value = true
        record.children = await requestList(record.id)
    }
}

let editRecord: any = undefined
/**
 * 表格编辑
 * @param record 当前数据
 */
const onRedactDepartment = (record: Tableitem) => {
    editRecord = record
    for (const key in formState) formState[key] = record[key]
    formState.area = record.area.split('/')
    departmentId.value = record.id
    openState.value = true
}

const onAddSubordinateDepartment = (record?: { parentDepartments: string, id: string }) => {
    editRecord = record
    let user = JSON.parse(localStorage.getItem("user") as string)
    if (record) {
        formState.parentDepartmentId = record.id
    } else {
        formState.parentDepartmentId = user.department_id
    }
    openState.value = true
}
const onDelete = (record: Tableitem, index: Number) => {

    Modal.confirm({
        title: '确定要删除当前部门吗？',
        onOk() {
            deleteDepartment({ ids: [record.id] }).then(() => {
                let parentDepartmentsArr = record.parentDepartments.split(",")
                if (parentDepartmentsArr.length > 1) {
                    let presentDepartmentsObj: any = {
                        children: tableList.value
                    }
                    for (let index = 0; index < parentDepartmentsArr.length; index++) {
                        if (index !== 0) {
                            presentDepartmentsObj = presentDepartmentsObj.children.find((item: Tableitem) => item.id === Number(parentDepartmentsArr[index]))
                        }
                    }
                    presentDepartmentsObj.children.splice(presentDepartmentsObj.children.findIndex((item: Tableitem) => item.id === record.id), 1)
                    if (presentDepartmentsObj.children.length === 0) presentDepartmentsObj.children = undefined
                    console.log(presentDepartmentsObj)
                } else {
                    tableList.value.splice(index, 1)
                }

            })
        },
        onCancel() { },
    });
}

const onFinish = () => {
    let api
    let fromData: any = { ...formState }
    console.log(formState)

    if (departmentId.value !== undefined) {
        api = editDepartment
        fromData.id = departmentId.value
    } else {
        api = addDepartment
    }
    fromData.area = fromData.area.join('/')
    api(fromData).then((res: any) => {
        if (departmentId.value !== undefined) {
            for (const key in fromData) {
                editRecord[key] = fromData[key]
            }
        } else {
            if (editRecord) {
                editRecord.children = [...editRecord.children || [], res.data]
            } else {
                tableList.value.push(res.data)
            }

        }
        openState.value = false
    })
};
const onSearch = async () => {
    for (const key in searchFrom) searchFrom[key] = ""
    searchTags.value.forEach((item: SearchFronModel) => {
        if (item.value) searchFrom[item.key] = item.value
    })
    console.log(searchFrom)
    tableList.value = await requestList()
}

const requestList = (id?: number) => {
    let user = JSON.parse(localStorage.getItem("user") as string)
    let fromData = {
        parentDeptId: id || user.department_id,
        page: page.value,
        pageSize: pageSize.value,
        flag: 0,
        ...searchFrom
    }
    loading.value = true

    return listDepartment(fromData).then((res: resTable<{ data: Tableitem[], total: number }>) => {
        let { data } = res.data
        if (data) {
            data.forEach((item: Tableitem) => {
                if (item.hasChildren) item.children = []
            })
        }
        loading.value = false
        return data

    })
}

const filter: ShowSearchType['filter'] = (inputValue, path) => {
    return path.some(option => option.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
};
let columnsCheckboxArray = ref<string[]>([])
onMounted(async () => {
    tableList.value = await requestList()
    searchModelItem.value = searchFronModel[0]
    let columnsStorageJson = localStorage.getItem('columnsStorageJson') as string | null;
    if (columnsStorageJson) {
        columnsCheckboxArray.value = JSON.parse(columnsStorageJson)
    } else {
        columnsCheckboxArray.value = columns.value.map((item: Columns) => item.dataIndex)
    }
})

const changeColumnsCheckbox = () => {
    columns.value = columns.value.filter((item: Columns) => columnsCheckboxArray.value.some((el: string) => el == item.dataIndex))
    sessionStorage.setItem('columnsStorageJson', JSON.stringify(columnsCheckboxArray.value));
}

const columns = ref<Columns[]>([
    {
        title: 'department.departmentName',
        dataIndex: 'name',
        width: 200,
        ellipsis: true,
    },
    {
        title: 'department.departmentLocation',
        dataIndex: 'area',
    },
    {
        title: 'department.departmentDescribe',
        dataIndex: 'description',
    },
    {
        title: 'public.creationTime',
        dataIndex: 'updatedAt',
    },
    {
        title: 'public.operation',
        fixed: 'right',
        dataIndex: 'operation',
        width: 300,
    }
])

</script>

<style lang="less" scoped></style>