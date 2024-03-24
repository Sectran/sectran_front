<template>

    <a-table :columns="columns" :data-source="list" class="components-table-demo-nested" :scroll="{ y: 400 }"
        ref="tableRef" :pagination="false" :loading="loading" :expandedRowKeys="expandedRowKeys"
        :showHeader="props.ifshowHeader" bordered :indentSize="5">
        <template #headerCell="{ column }">
            <span v-if="column && typeof column.title === 'string'">{{ t(column.title) }}</span>
        </template>
        <!-- index, indent, expanded -->
        <template #expandedRowRender="{ record }">
            <nested-table :columnsNameWinth="props.columnsNameWinth - 48" @departmentDelete="departmentDelete"
                :superiorId="record.id" :ifshowHeader="false" />
        </template>
        <template #expandIcon="{ record }">
            <template v-if="record.hasChildren">
                <a-button style="width: 0;min-width:0" type="link" shape="circle" @click="expandRow(record.key)"
                    :icon="h(expandedRowKeys.includes(record.key as never) ? DownOutlined : RightOutlined)" />
            </template>
            <template v-else>
                <span></span>
            </template>
        </template>
        <template #bodyCell="{ column, record, index, text }">
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
                    <a-button type="link" danger @click="onDelete(record, index)">{{ t('public.delete') }}</a-button>
                </a-space>
            </template>
        </template>
    </a-table>

    <a-modal v-model:open="openState" title="添加部门" :footer='null'
        :after-close="() => { submitFormRef?.resetFields(); id = undefined }">
        <a-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }" ref="submitFormRef"
            autocomplete="off" @finish="onFinish">
            <a-form-item label="部门名称" name="name" :rules="[{ required: true, message: 'Please input your username!' }]">
                <a-input v-model:value="formState.name" />
            </a-form-item>
            <a-form-item label="部门描述" name="description"
                :rules="[{ required: true, message: 'Please input your password!' }]">
                <a-input v-model:value="formState.description" />
            </a-form-item>
            <a-form-item label="部门位置" name="area" :rules="[{ required: true, message: 'Please input your password!' }]">
                <!-- <a-input v-model:value="formState.area" /> -->
                <a-cascader :fieldNames="{ label: 'name', value: 'name', children: 'children' }"
                    v-model:value="formState.area" :options="TestJson" :show-search="{ filter }" />
            </a-form-item>
            <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
                <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
            </a-form-item>
        </a-form>
    </a-modal>
</template>
<script lang="ts" setup>
import nestedTable from "@/components/nested-table/nested-table.vue"
import { ref, nextTick, onMounted, onBeforeUnmount, reactive, h } from 'vue';
import { listDepartment, addDepartment, editDepartment, deleteDepartment } from "@/api/admin";
import { resTable } from "@/utils/type/type"
import { useI18n } from 'vue-i18n';
import dayjs from 'dayjs';
import type { FormInstance } from 'ant-design-vue';
import { RightOutlined, DownOutlined } from '@ant-design/icons-vue';
import { Modal, message } from 'ant-design-vue';
import TestJson from "@/assets/json/region.json";
import type { ShowSearchType } from 'ant-design-vue/es/cascader';
type Tableitem = {
    id: number
    key: number
    area:string
}

interface FormState {
    id?: number
    area: string[]
    description: string
    name: string
    parentDepartments: number | string
    parentDepartmentId: number | string
}

interface Iprops {
    superiorId: number
    ifshowHeader: boolean
    departmentDelete?: Function
    columnsNameWinth?: number
}


const props = withDefaults(defineProps<Iprops>(), {
    columnsNameWinth: 300,
});

const submitFormRef = ref<FormInstance>();
const { t } = useI18n()
const tableRef = ref();

let page = ref<number>(1);
let pageSize = ref<number>(10);
let toTal = ref<number>(0)
let list = ref<any>([])
let loading = ref<boolean>(false)
let openState = ref<boolean>(false)
const id = ref<number | undefined>(undefined);
const formState = reactive<FormState>({
    area: [],
    description: "",
    name: "",
    parentDepartments: "",
    parentDepartmentId: 1,
});

const onRedactDepartment = (record: Tableitem) => {
    for (const key in formState) formState[key] = record[key]
    formState.area = record.area.split('/')
    id.value = record.id
    openState.value = true
}

const onAddSubordinateDepartment = (record: { parentDepartments: string, id: string }) => {
    formState.parentDepartments = record.parentDepartments ? record.parentDepartments + `,${record.id}` : record.id + '';
    formState.parentDepartmentId = props.superiorId;
    openState.value = true
}
const emit = defineEmits(['departmentDelete'])
const onDelete = (record: Tableitem, index: number) => {
    console.log(index)
    Modal.confirm({
        title: '确定要删除当前部门吗？',
        onOk() {
            return deleteDepartment({ ids: [record.id] }).then(() => {
                message.success('删除成功');
                list.value.splice(index, 1)
                if (id.value !== 1 && list.value.length === 0) {
                    emit('departmentDelete', props.superiorId);
                }
            })
        },
        onCancel() { },
    });
}

const departmentDelete = (id: number) => {
    for (let index = 0; index < list.value.length; index++) {
        if (list.value[index].id === id) {
            list.value[index].hasChildren = false
        }
    }
    console.log(list.value)
    expandRow(id)
}



const onFinish = () => {
    let api
    let fromData: any = { ...formState }
    if (id.value !== undefined) {
        api = editDepartment
        fromData.id = id.value
    } else {
        api = addDepartment
    }
    fromData.area = fromData.area.join('/')
    api(fromData).then(() => {
        if (id.value !== undefined) {
            let itemIndex = list.value.findIndex((item: Tableitem) => item.id === id.value)
            for (const key in fromData) {
                list.value[itemIndex][key] = fromData[key]
            }
        }
        openState.value = false
        // requestList()
    })
};

let expandedRowKeys = ref<number[]>([])
const expandRow = (key: number) => {
    let keyIndex = expandedRowKeys.value.findIndex((item: number) => item == key)
    if (keyIndex == -1) {
        expandedRowKeys.value.push(key)
    } else {
        expandedRowKeys.value.splice(keyIndex, 1)
    }
}

const requestList = () => {
    let fromData = {
        id: props.superiorId,
        page: page.value,
        pageSize: pageSize.value,
        deep: 1
    }
    loading.value = true
    listDepartment(fromData).then((res: resTable<{ data: Tableitem[], total: number }>) => {
        let { data, total } = res.data
        data.forEach((item: Tableitem) => item.key = item.id)
        list.value = data
        toTal.value = total
        loading.value = false
    })
}

// 定义滚动函数
const handleScroll = () => {
    const tableContainer = tableRef.value.$el.querySelector('.ant-table-body');
    const scrollPosition = tableContainer.scrollTop;
    const isBottom = tableContainer.scrollHeight - scrollPosition <= tableContainer.clientHeight + 20;
    if (isBottom) {
        if (loading) return
        if (list.value.length === toTal) return
        console.log('加载更多');
        requestList()
    }
}

// 添加scroll监听
onMounted(() => {
    nextTick(() => {
        if (tableRef.value) {
            const tableContainer = tableRef.value.$el.querySelector('.ant-table-body');
            tableContainer.addEventListener('scroll', handleScroll);
        }
    })
})

// 移除scroll监听
onBeforeUnmount(() => {
    nextTick(() => {
        if (tableRef.value) {
            const tableContainer = tableRef.value.$el.querySelector('.ant-table-body');
            tableContainer.removeEventListener('scroll', handleScroll);
        }
    })
})

onMounted(() => {
    requestList()
})

const columns = [
    // {
    //     title: 'department.departmentId',
    //     dataIndex: 'id',
    // },
    {
        title: 'department.departmentName',
        dataIndex: 'name',
        width: props.columnsNameWinth,
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

const filter: ShowSearchType['filter'] = (inputValue, path) => {
    return path.some(option => option.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
};

</script>


<style lang="less" scoped>
::v-deep(.ant-table-cell) {
    padding: 12px 16px !important;
}
</style>