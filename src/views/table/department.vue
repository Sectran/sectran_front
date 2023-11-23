<template>
    <div class="tablePage-style">
        <div class="table-nav">
            <a-form layout="inline" :model="searchFrom">
                <a-row :gutter="[20, 16]">
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item label="部门ID">
                            <a-input v-model:value="searchFrom.dept_id" placeholder="请输入部门ID" />
                        </a-form-item>
                    </a-col>
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('department.name')">
                            <a-input v-model:value="searchFrom.name" placeholder="请输入部门名称" />
                        </a-form-item>
                    </a-col>
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item label="部门位置">
                            <a-input v-model:value="searchFrom.region" placeholder="请输入部门位置" />
                        </a-form-item>
                    </a-col>
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item label="上级部门">
                            <a-input v-model:value="searchFrom.parentId" placeholder="请输入上级部门" />
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

        <a-table class="table-style" :scroll="{ y: 300 }" :columns="columns" :data-source="data" />
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

                <a-form-item label="上级部门ID" name="parentId"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input v-model:value="formState.parentId" />
                </a-form-item>



                <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
                    <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </a-modal>

    </div>
</template>

<script setup lang="ts">

import { onMounted, ref, reactive, h } from 'vue';
import { addDepartment, editDepartment } from "@/api/admin"
import { useI18n } from 'vue-i18n'
import { SearchOutlined, SyncOutlined, PlusOutlined } from '@ant-design/icons-vue';

// type SearchType = {
//     dept_id: number;
//     name: string,
//     region: string,
//     parentId: number
// };

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
let searchFrom = reactive({
    dept_id: 0,
    name: "",
    region: "",
    parentId: 0

});



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
        address: 'New York No. 1 Lake Park',
        children: [
            {
                key: 11,
                name: 'John Brown',
                age: 42,
                address: 'New York No. 2 Lake Park',
            },
            {
                key: 12,
                name: 'John Brown jr.',
                age: 30,
                address: 'New York No. 3 Lake Park',
                children: [
                    {
                        key: 121,
                        name: 'Jimmy Brown',
                        age: 16,
                        address: 'New York No. 3 Lake Park',
                    },
                ],
            },
            {
                key: 13,
                name: 'Jim Green sr.',
                age: 72,
                address: 'London No. 1 Lake Park',
                children: [
                    {
                        key: 131,
                        name: 'Jim Green',
                        age: 42,
                        address: 'London No. 2 Lake Park',
                        children: [
                            {
                                key: 1311,
                                name: 'Jim Green jr.',
                                age: 25,
                                address: 'London No. 3 Lake Park',
                            },
                            {
                                key: 1312,
                                name: 'Jimmy Green sr.',
                                age: 18,
                                address: 'London No. 4 Lake Park',
                            },
                            {
                                key: 1311,
                                name: 'Jim Green jr.',
                                age: 25,
                                address: 'London No. 3 Lake Park',
                            },
                            {
                                key: 1312,
                                name: 'Jimmy Green sr.',
                                age: 18,
                                address: 'London No. 4 Lake Park',
                            },
                            {
                                key: 1311,
                                name: 'Jim Green jr.',
                                age: 25,
                                address: 'London No. 3 Lake Park',
                            },
                            {
                                key: 1312,
                                name: 'Jimmy Green sr.',
                                age: 18,
                                address: 'London No. 4 Lake Park',
                            },
                            {
                                key: 1311,
                                name: 'Jim Green jr.',
                                age: 25,
                                address: 'London No. 3 Lake Park',
                            },
                            {
                                key: 1312,
                                name: 'Jimmy Green sr.',
                                age: 18,
                                address: 'London No. 4 Lake Park',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 2,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
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


const columns = [
    // {
    //     title: '部门ID',
    //     dataIndex: 'DeptId',
    // },

    {
        title: '部门名称',
        dataIndex: 'name',

    },

    {
        title: '部门描述',
        dataIndex: 'address',
        key: 'address',
        // slots: { customRender: 'Description' },
    },
    {
        title: '部门地址',
        dataIndex: 'Region',
    },

    {
        title: '上级部门ID',
        dataIndex: 'ParentId',
    },

    {
        title: '下级部门ID',
        dataIndex: 'ChildIds',
    },


    {
        title: '创建时间',
        dataIndex: 'CreateTime',
    },
    {
        title: '操作',
        dataIndex: 'operation',
    }
]
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