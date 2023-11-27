<template>
    <div class="tablePage-style">
        <div class="table-nav">
            <a-form layout="inline" :model="searchFrom">
                <a-row :gutter="[20, 16]">
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('department.departmentId')">
                            <a-input v-model:value="searchFrom.dept_id" :placeholder="t('department.departmentIdPlaceholder')" />
                        </a-form-item>
                    </a-col>
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('department.departmentName')">
                            <a-input v-model:value="searchFrom.name" :placeholder="t('department.departmentNamePlaceholder')"  />
                        </a-form-item>
                    </a-col>
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('department.departmentLocation')">
                            <a-input v-model:value="searchFrom.region" :placeholder="t('department.departmentLocationPlaceholder')" />
                        </a-form-item>
                    </a-col>
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item>
                            <a-space wrap>
                                <a-button :icon="h(SearchOutlined)" type="primary">
                                    {{ t('public.search') }}
                                </a-button>
                                <a-button :icon="h(SyncOutlined)">
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

        <a-table class="table-style" :scroll="{ y: tabHeight}" :columns="columns" :data-source="data">
            <template #headerCell="{ column }">
                <span>{{ t(column.title) }}</span>
            </template>
            <template #bodyCell="{ column }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space :size="8">
                        <a-button type="link"  >{{ t('public.redact') }}</a-button>
                        <a-button type="link"  @click="addOpen = true">{{ t('department.addSubordinateDepartment') }}</a-button>
                        <a-button type="link" danger >{{ t('public.delete') }}</a-button>
                    </a-space>
                </template>
            </template>

        </a-table>
        <a-modal v-model:open="addOpen" title="添加部门" :footer=null>
            <a-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }" autocomplete="off"
                @finish="onFinish">
                <a-form-item label="部门名称" name="name" :rules="[{ required: true, message: 'Please input your username!' }]">
                    <a-input v-model:value="formState.name" />
                </a-form-item>

                <a-form-item label="部门描述" name="description"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input v-model:value="formState.description" />
                </a-form-item>

                <a-form-item label="部门位置" name="region"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input v-model:value="formState.region" />
                </a-form-item>

                <!-- <a-form-item label="上级部门ID" name="parentId"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input v-model:value="formState.parentId" />
                </a-form-item> -->
                <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
                    <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </a-modal>

    </div>
</template>


<script setup lang="ts">

import { useTableHooks } from "@/hooks/useTableHooks"
import { onMounted, ref, reactive, h } from 'vue';
import { addDepartment, editDepartment } from "@/api/admin"
import { useI18n } from 'vue-i18n'
import { SearchOutlined, SyncOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { listUser, deleteUser } from "@/api/admin"
type SearchType = {
    dept_id: number;
    name: string,
    region: string,
    parentId: number
};
let searchFrom = reactive({
    dept_id: 0,
    name: "",
    region: "",
    parentId: 0

});
// paginationOpt, tableData, searchFormRef, requestList, on_search, fromreset, handleDelete,
let { tabHeight } = useTableHooks<SearchType>(searchFrom, { listApi: listUser, deleteApi: deleteUser });


interface FormState {
    dept_id?: number
    name: string;
    parentId: number
    description: string,
    childIds: string,
    region: string,
    createByUid: number
}

// type listItemType = {
//     id: string
//     name: string
//     describe: string
// }
const { t } = useI18n()
const addOpen = ref<boolean>(false);
// let listItem = reactive<listItemType>()


const columns = [
    {
        title: 'department.departmentId',
        dataIndex: 'DeptId',
    },
    {
        title: 'department.departmentName',
        dataIndex: 'name',

    },
    {
        title: 'department.departmentDescribe',
        dataIndex: 'address',
    },
    {
        title: 'department.departmentLocation',
        dataIndex: 'Region',
    },

    {
        title: 'department.superiorDepartment',
        dataIndex: 'ParentId',
    },

    {
        title: 'department.subordinateDepartment',
        dataIndex: 'ChildIds',
    },
    {
        title: 'public.creationTime',
        dataIndex: 'CreateTime',
    },
    {
        title: 'public.operation',
        fixed: 'right',
        dataIndex: 'operation',
        width:300,
    }
]



interface DataItem {
    key: number;
    name: string;
    age: number;
    address: string;
    children?: DataItem[];
}

const data: DataItem[] = [
    {
        key: 1,
        name: '验收部门',
        age: 60,
        address: '验收部门描述',
        children: [
            {
                key: 11,
                name: '二级部门',
                age: 42,
                address: '二级部门',
            },
            {
                key: 12,
                name: '二级部门',
                age: 30,
                address: '二级部门',
                children: [
                    {
                        key: 121,
                        name: '三级部门',
                        age: 16,
                        address: '三级部门',
                    },
                ],
            },
        ],
    },
    {
        key: 2,
        name: '测试部门',
        age: 32,
        address: '测试部门',
    },
];

const formState = reactive<FormState>({
    name: "",
    description: "",
    childIds: "",
    parentId: 0,
    region: "",
    createByUid: 1
});

// const on_redact = (data: any) => {
//     console.log(data.id)
//     addOpen.value = true
//     formState.name = data.Name
//     formState.description = data.Description.String
//     formState.dept_id = data.DeptId
//     formState.parentId = data.ParentId
//     formState.childIds = data.ChildIds
//     formState.region = data.Region
//     formState.createByUid = data.CreateByUid.int64

// }


const onFinish = () => {

    let api
    if (formState.dept_id) {
        api = editDepartment
    } else {
        api = addDepartment
    }
    formState.parentId = formState.parentId ? Number(formState.parentId) : 0
    api(formState).then(() => {
        addOpen.value = false
        // Fun_requestList()
    })
};

onMounted(() => {

})
</script>

<style lang="less" scoped></style>