<template>
    <div class="tablePage-style">
        <!-- <div class="table-nav">
            <a-form layout="inline" :model="searchFrom" ref="searchFormRef">
                <a-row :gutter="[20, 16]">
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('department.departmentId')">
                            <a-input v-model:value="searchFrom.dept_id"
                                :placeholder="t('department.departmentIdPlaceholder')" />
                        </a-form-item>
                    </a-col>
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('role.roleName')" name="name">
                            <a-input v-model:value="searchFrom.name" allowClear :placeholder="t('role.roleName')" />
                        </a-form-item>
                    </a-col>
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
        </div> -->

        <a-space class="mb8 flex-space-between-center">
            <a-space>
                <a-button type="primary" @click="handleDelete(tableState.selectedRowKeys)"
                    :disabled="tableState.selectedRowKeys.length === 0" danger>{{
                        t('public.deleteInBatches') }}</a-button>
            </a-space>
            <a-space>
                <a-button :icon="h(PlusOutlined)" @click="addOpen = true" type="primary">{{ t('public.add')
                    }}</a-button>
            </a-space>
        </a-space>
        <a-table rowKey="id" class="table-style" :scroll="{ y: tabHeight }" :columns="columns" :data-source="tableData"
            :indentSize="10" :pagination="paginationOpt"
            :row-selection="{ selectedRowKeys: tableState.selectedRowKeys, onChange: onTableSelectChange }"
            :loading="tableLoading">
            <template #headerCell="{ column }">
                <span>{{ t(column.title) }}</span>
            </template>
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space :size="8">
                        <a-button type="link" @click="onRedact(record)">{{ t('public.redact') }}</a-button>
                        <a-button type="link" @click="editLimits(record.id)">{{ t('role.permissionlist')
                            }}</a-button>
                        <a-button type="link" danger>{{ t('public.delete') }}</a-button>
                    </a-space>
                </template>
                <template v-if="column.dataIndex === 'createdAt' || column.dataIndex === 'updatedAt'">
                    {{ dayjs(record[column.dataIndex]).format("YYYY-MM-DD HH:mm:ss") }}
                </template>
            </template>
            <template #customFilterDropdown>
                <!-- ="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }" -->
                <div class="search-style">
                    <a-input v-model:value="searchFrom.name" class="search-input" :placeholder="t('role.roleName')" />
                    <div class="search-button">
                        <a-button type="primary" size="small" @click="on_search()">
                            <template #icon>
                                <SearchOutlined />
                            </template>
                            {{ t('public.search') }}
                        </a-button>
                        <a-button size="small" @click="searchFrom.name = ''; on_search()">
                            {{ t('public.reset') }}
                        </a-button>
                    </div>
                </div>
            </template>
            <template #customFilterIcon="{ filtered }">
                <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
            </template>
        </a-table>

        <a-modal v-model:open="addOpen" title="添加角色" :footer='null'
            :after-close="() => { fromreset(submitFormRef); id = undefined }">
            <a-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }"
                ref="submitFormRef" autocomplete="off" @finish="onFinish">
                <a-form-item label="角色名称" name="name"
                    :rules="[{ required: true, message: 'Please input your username!' }]">
                    <a-input v-model:value="formState.name" />
                </a-form-item>
                <a-form-item label="角色权重" name="weight"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input-number class="w100" id="inputNumber" v-model:value="formState.weight" />
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
                    <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </a-modal>
        <!-- :rowKey="(record: any, index: number) => record.path || index"  -->
        <a-modal v-model:open="limitsOpen" width="800px" :title="t('role.permissionlist')"
            :confirm-loading="limitsButtonLoading" @ok="limitsOnOk">
            <a-table :scroll="{ y: 500 }" :columns="limitsColumns"
                :rowKey="(record: any, index: number) => index " :data-source="limitsData"
                :row-selection="rowSelection" />
        </a-modal>

    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, reactive, h } from 'vue';
import { useTableHooks } from "@/hooks/useTableHooks"
import { listRole, addRole, editRole, deleteRole, updateAuthority, getMenu } from "@/api/admin"
import { SearchOutlined, PlusOutlined, } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import dayjs from 'dayjs';
import limitsJson from "@/assets/json/limits.json"
type FormState = {
    name: string
    weight: number
}
interface TableItem extends FormState {
    key: number;
    id: number

}
type SearchType = {
    name: string
};
const { t } = useI18n()
let searchFrom = reactive<SearchType>({
    name: ""
});
// searchFormRef,
let { tabHeight, paginationOpt, tableData, tableState, submitFormRef, tableLoading, requestList, on_search, fromreset, handleDelete, onTableSelectChange } = useTableHooks<SearchType>(searchFrom, { listApi: listRole, deleteApi: deleteRole });

const columns = [
    {
        title: 'role.roleName',
        dataIndex: 'name',
        customFilterDropdown: true,
    },
    {
        title: 'role.roleWeight',
        dataIndex: 'weight',
    },
    {
        title: 'public.creationDate',
        dataIndex: 'createdAt',
    },
    {
        title: 'public.UpdateDate',
        dataIndex: 'updatedAt',
    },
    {
        title: 'public.operation',
        fixed: 'right',
        dataIndex: 'operation',
        width: 300,
    }
]

const addOpen = ref<boolean>(false);
const formState = reactive<FormState>({
    name: "",
    weight: 0
});
const id = ref<number | undefined>(undefined);



const onRedact = (record: TableItem) => {
    for (const key in formState) formState[key] = record[key]
    id.value = record.id
    addOpen.value = true
}


const onFinish = () => {
    let api
    let fromData: any = { ...formState }
    if (id.value !== undefined) {
        api = editRole
        fromData.id = id.value
    } else {
        api = addRole
    }
    api(fromData).then(() => {
        addOpen.value = false
        requestList()
        message.success(t('message.success'));
    })
};


//权限功能模块
interface LimitsDataItem {
    path: string
    name: string
    method: string
    children?: LimitsDataItem[];
}


let limitsOpen = ref<boolean>(false)
let limitsTableLoading = ref<boolean>(false)
let limitsButtonLoading = ref<boolean>(false)
const limitsData: LimitsDataItem[] = limitsJson
let roleId = 0
const limitsColumns = [
    {
        title: '权限名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '权限标识',
        dataIndex: 'path',
        key: 'path',
    },
];





const rowSelection = ref<{ checkStrictly: boolean, selectedRowKeys: (string | number)[], onChange: Function }>({
    checkStrictly: false,
    selectedRowKeys: [],
    onChange: (selectedRowKeys: (string | number)[], selectedRows: LimitsDataItem[]) => {
        rowSelection.value.selectedRowKeys = selectedRowKeys
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
});

const editLimits = (id: number) => {
    limitsOpen.value = true;
    roleId = id
    limitsTableLoading.value = true
    getMenu<{ id: number, type: 2 }>({ id, type: 2 }).then((res: { data: string[] }) => {
        let { data } = res
        rowSelection.value.selectedRowKeys = data
        limitsTableLoading.value = false
    })
}

const limitsOnOk = () => {
    console.log(rowSelection.value)

    return
    limitsButtonLoading.value = true
    let limitsData: { path: string, method: string }[] = []
    // selectedRowsData.value.forEach((item: LimitsDataItem) => {
    //     if (item.children && item.children.length !== 0) {
    //         limitsData.push({
    //             path: item.path,
    //             method: item.method
    //         })
    //     }
    // })

    let fromData = {
        roleId,
        data: limitsData
    }
    updateAuthority(fromData).then((res: any) => {
        console.log(res)
    })

    console.log(limitsData)
}

</script>

<style lang="less" scoped>
.checkbox-son {
    width: 100%;
    margin-top: 10px;
}
</style>
