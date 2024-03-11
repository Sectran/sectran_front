<template>
    <div class="tablePage-style">

        <div class="table-nav">
            <a-form layout="inline" :model="searchFrom" ref="searchFormRef">
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
                    <a-col :xl="6" :md="8" :xs="12">
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
                    </a-col>
                </a-row>

            </a-form>
        </div>

        <a-space class="mb8 justify-end">
            <a-button :icon="h(PlusOutlined)" @click="addOpen = true" type="primary">{{ t('public.add') }}</a-button>
        </a-space>
        <!-- tabHeight -->
        <a-table class="table-style" :scroll="{ y:  80}" :columns="columns" :data-source="data" :indentSize="10"
            :pagination="paginationOpt" @expand="expand" @scroll="handleScroll">
            <template #expandedRowRender="{ record }">
                <p style="margin: 0">
                    1321
                </p>
            </template>
            <!-- <template #headerCell="{ column }">
            
                <span>{{ t(column.title) }}</span>
            </template> -->
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space :size="8">
                        <a-button type="link" @click="onRedactDepartment(record)">{{ t('public.redact') }}</a-button>
                        <a-button type="link" @click="onAddSubordinateDepartment(record)">
                            {{ t('department.addSubordinateDepartment') }}
                        </a-button>
                        <a-button type="link" danger>{{ t('public.delete') }}</a-button>
                    </a-space>
                </template>
            </template>


        </a-table>

        <a-modal v-model:open="addOpen" title="添加部门" :footer='null'
            :after-close="() => { fromreset(submitFormRef); id = undefined }">
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
                    <a-input v-model:value="formState.area" />
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
                    <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>


<script setup lang="ts">
import { useTableHooks } from "@/hooks/useTableHooks"
import { onMounted, ref, reactive, h } from 'vue';
import { listDepartment, addDepartment, editDepartment, deleteDepartment } from "@/api/admin"
import { useI18n } from 'vue-i18n'
import { SearchOutlined, SyncOutlined, PlusOutlined } from '@ant-design/icons-vue';
type SearchType = {
    id: number
    area: string
    name: string
};
interface FormState {
    id?: number
    area: string
    description: string
    name: string
    parentDepartments: number | string
}

interface DataItem extends FormState {
    key: number;
    children?: DataItem[];
}

let searchFrom = reactive<SearchType>({
    id: 1,
    area: "",
    name: ""
});
const tableChildren = (data: any) => {
    data.forEach((item: any) => {
        if (item.hasChildren) item.children = []
    });
    return data
}
let { tabHeight, paginationOpt, tableData, searchFormRef, submitFormRef, requestList, on_search, fromreset, handleDelete } = useTableHooks<SearchType>(searchFrom, { listApi: listDepartment, deleteApi: deleteDepartment }, { ifDispose: true, Fun: tableChildren });
const { t } = useI18n()
const addOpen = ref<boolean>(false);
const id = ref<number | undefined>(undefined);

// const columns = [
//     {
//         title: 'department.departmentId',
//         dataIndex: 'id',
//     },
//     {
//         title: 'department.departmentName',
//         dataIndex: 'name',
//     },
//     {
//         title: 'department.departmentDescribe',
//         dataIndex: 'description',
//     },
//     {
//         title: 'department.departmentLocation',
//         dataIndex: 'area',
//     },

//     {
//         title: 'department.superiorDepartment',
//         dataIndex: 'parentDepartments',
//     },
//     {
//         title: 'public.creationTime',
//         dataIndex: 'updatedAt',
//     },
//     {
//         title: 'public.operation',
//         fixed: 'right',
//         dataIndex: 'operation',
//         width: 300,
//     }
// ]


import { DownOutlined } from '@ant-design/icons-vue';
const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Version', dataIndex: 'version', key: 'version' },
  { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  { title: 'Action', key: 'operation' },
];

interface DataItem {
  key: number;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: `Screem ${i + 1}`,
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00',
  });
}

const innerColumns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', key: 'state' },
  { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
  },
];

interface innerDataItem {
  key: number;
  date: string;
  name: string;
  upgradeNum: string;
}

const innerData: innerDataItem[] = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    date: '2014-12-24 23:12:00',
    name: `This is production name ${i + 1}`,
    upgradeNum: 'Upgraded: 56',
  });
}

const formState = reactive<FormState>({
    area: '',
    description: "",
    name: "",
    parentDepartments: "",
});

const onRedactDepartment = (record: DataItem) => {
    for (const key in formState) formState[key] = record[key]
    id.value = record.id
    addOpen.value = true
}

const onAddSubordinateDepartment = (record: { parentDepartments: string, id: string }) => {
    formState.parentDepartments = record.parentDepartments ? record.parentDepartments + `,${record.id}` : record.id + '';
    addOpen.value = true
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
    api(fromData).then(() => {
        addOpen.value = false
        requestList()
    })
};

const handleScroll = (event:any) => {
    const container = event.target;
    console.log(12321)
    if (container.scrollHeight - container.scrollTop === container.clientHeight) {
        // 滚动条到达底部
        console.log('滚动条到达底部');
    }
};

const expand = (expanded: boolean, record: { children: [], id: number }) => {
    // if (expanded === true && record.children.length !== 0) {
    //     console.log(record.id)

    // }
    console.log(expanded)
    console.log(record)
}



</script>

<style lang="less" scoped></style>