<template>
    <div class="tablePage-style">

        <div class="table-nav">
            <!-- :model="searchFrom"  -->
            <a-form layout="inline" ref="searchFormRef">
                <a-row :gutter="[20, 16]">
                    <!-- <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('department.departmentId')">
                            <a-input v-model:value="searchFrom.dept_id"
                                :placeholder="t('department.departmentIdPlaceholder')" />
                        </a-form-item>
                    </a-col> -->
                    <!-- <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('department.departmentName')" name="name">
                            <a-input v-model:value="searchFrom.name" allowClear
                                :placeholder="t('department.departmentNamePlaceholder')" />
                        </a-form-item>
                    </a-col>
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('department.departmentLocation')">
                            <a-input v-model:value="searchFrom.area" allowClear
                                :placeholder="t('department.departmentLocationPlaceholder')" />
                        </a-form-item>
                    </a-col> -->
                    <!-- <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item>
                            <a-space wrap>
                                <a-button :icon="h(SearchOutlined)" type="primary" @click="on_search()">
                                    {{ t('public.search') }}
                                </a-button>
                                <a-button :icon="h(SyncOutlined)" @click="fromreset(searchFormRef)">
                                    {{ t('public.reset') }}
                                </a-button>
                            </a-space>
                        </a-form-item>
                    </a-col> -->
                </a-row>

            </a-form>
        </div>
        <!-- <a-space class="mb8 justify-end">
            <a-button :icon="h(PlusOutlined)" @click="console.log(value)" type="primary">{{ t('public.add')
                }}</a-button>
        </a-space> -->
        <!-- :scroll="{ y: 400 }" -->
        <a-table :columns="columns" :data-source="tableList" class="components-table-demo-nested" ref="tableRef"
            :pagination="false" :loading="loading" rowKey="id" bordered :indentSize="5" @expand="expandTable">
            <template #headerCell="{ column }">
                <span v-if="column && typeof column.title === 'string'">{{ t(column.title) }}</span>
            </template>
            <template #bodyCell="{ column, record, text }">
                <template v-if="column.dataIndex === 'name'">
                    <a width="200" href="javascript:;">{{ text }}</a>
                </template>
                <template v-if="column.dataIndex === 'updatedAt'">
                    {{ dayjs(text).format("YYYY-MM-DD HH:mm:ss") }}
                </template>
                <template v-if="column.dataIndex === 'operation'">
                    <a-space :size="8">
                        <a-button type="link" @click="onRedactDepartment(record)">{{ t('public.redact') }}</a-button>
                        <a-button type="link" @click="onAddSubordinateDepartment(record)">
                            {{ t('department.addSubordinateDepartment') }}
                        </a-button>
                        <a-button type="link" danger @click="onDelete(record)">{{ t('public.delete')
                            }}</a-button>
                    </a-space>
                </template>
            </template>
        </a-table>

        <a-modal v-model:open="openState" title="添加部门" :footer='null'
            :after-close="() => { submitFormRef?.resetFields(); departmentId = undefined }">
            <a-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }"
                ref="submitFormRef" autocomplete="off" @finish="onFinish">
                <a-form-item label="部门名称" name="name"
                    :rules="[{ required: true, message: 'Please input your username!' }]">
                    <a-input v-model:value="formState.name" />
                </a-form-item>
                <a-form-item label="部门描述" name="description"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input v-model:value="formState.description" />
                </a-form-item>
                <a-form-item label="部门位置" name="area"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <!-- <a-input v-model:value="formState.area" /> -->
                    <a-cascader :fieldNames="{ label: 'name', value: 'name', children: 'children' }"
                        v-model:value="formState.area" :options="TestJson" :show-search="{ filter }" />
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
                    <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>


<script setup lang="ts">
import { ref, onMounted, reactive, } from 'vue';
import { listDepartment, addDepartment, editDepartment, deleteDepartment } from "@/api/admin";
import { resTable } from "@/utils/type/type"
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import type { FormInstance } from 'ant-design-vue';
// import { RightOutlined, DownOutlined } from '@ant-design/icons-vue';
import { Modal, message } from 'ant-design-vue';
import TestJson from "@/assets/json/region.json";
import type { ShowSearchType } from 'ant-design-vue/es/cascader';
type Tableitem = {
    id: number
    key: number
    area: string
    hasChildren: boolean
    children?: Tableitem[]
}

interface FormState {
    id?: number
    area: string[]
    description: string
    name: string
    parentDepartments: number | string
    parentDepartmentId: number | string
}



const submitFormRef = ref<FormInstance>();
const { t } = useI18n()
const tableRef = ref();

let page = ref<number>(1);
let pageSize = ref<number>(20);
let toTal = ref<number>(0)
let tableList = ref<any>([])
let loading = ref<boolean>(false)
let openState = ref<boolean>(false)
const departmentId = ref<number | undefined>(1);
const formState = reactive<FormState>({
    area: [],
    description: "",
    name: "",
    parentDepartments: "",
    parentDepartmentId: 1,
});
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

let editRecord: any = {}
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

let addRecord = {}

const onAddSubordinateDepartment = (record: { parentDepartments: string, id: string }) => {
    formState.parentDepartments = record.parentDepartments ? record.parentDepartments + `,${record.id}` : record.id + '';
    addRecord = record || {}
    // formState.parentDepartmentId = props.superiorId;
    openState.value = true
}
const onDelete = (record: Tableitem) => {
    console.log(record)
    return
    Modal.confirm({
        title: '确定要删除当前部门吗？',
        onOk() {
            return deleteDepartment({ ids: [record.id] }).then(() => {
                message.success('删除成功');
                // tableList.value.splice(index, 1)

            })
        },
        onCancel() { },
    });
}

const onFinish = () => {
    let api
    let fromData: any = { ...formState }
    if (departmentId.value !== undefined) {
        api = editDepartment
        fromData.id = departmentId.value
    } else {
        api = addDepartment
    }
    fromData.area = fromData.area.join('/')
    api(fromData).then((res: any) => {
        console.log(res.data)
        if (departmentId.value !== undefined) {
            for (const key in fromData) {
                editRecord[key] = fromData[key]
            }
        } else {
            editRecord.children = [...editRecord.children || [], res.data]
        }
        openState.value = false
        // requestList()
    })
};

// let expandedRowKeys = ref<number[]>([])
// const expandRow = (key: number) => {
//     let keyIndex = expandedRowKeys.value.findIndex((item: number) => item == key)
//     if (keyIndex == -1) {
//         expandedRowKeys.value.push(key)
//     } else {
//         expandedRowKeys.value.splice(keyIndex, 1)
//     }
// }

const requestList = (id?: number) => {
    let fromData = {
        id: id || departmentId.value,
        page: page.value,
        pageSize: pageSize.value,
        deep: 1
    }
    loading.value = true

    return listDepartment(fromData).then((res: resTable<{ data: Tableitem[], total: number }>) => {
        let { data, total } = res.data
        if (data) {
            data.forEach((item: Tableitem) => {
                if (item.hasChildren) item.children = []
            })
        }
        loading.value = false
        return data
        tableList.value = data
        toTal.value = total

    })
}

const filter: ShowSearchType['filter'] = (inputValue, path) => {
    return path.some(option => option.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
};

onMounted(async () => {
    tableList.value = await requestList()
})

const columns = [
    // {
    //     title: 'department.departmentId',
    //     dataIndex: 'id',
    // },
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


    // {
    //     title: 'department.superiorDepartment',
    //     dataIndex: 'parentDepartments',
    // },
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
]

</script>

<style lang="less" scoped></style>