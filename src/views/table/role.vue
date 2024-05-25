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
                            <template v-for="(item, index) in searchFronModel" :key="item">
                                <a-sub-menu v-if="item.children && item.children.length !== 0" :key="index"
                                    :title="t(item.name)">
                                    <a-menu-item v-for="el in item.children" :key="el">{{ t(el.name)
                                        }}</a-menu-item>
                                </a-sub-menu>
                                <a-menu-item v-else :key="item">{{ t(item.name)
                                    }}</a-menu-item>
                            </template>
                        </a-menu>
                    </template>
                </a-dropdown>
                <div class="tags-style">
                    <a-tag v-for="(item, index) in searchTags" :key="index" closable
                        @close="() => searchTags.splice(index, 1)">
                        <a-tooltip v-if="item.name === 'public.open' || item.name === 'public.close'">
                            <template #title>{{ t('public.status') }}：{{ item.value ? '开启' : "关闭" }}</template>
                            <span class="tags-style-text"> {{ t('public.status') }}：{{ item.value ? '开启' : "关闭"
                                }}</span>
                        </a-tooltip>
                        <a-tooltip v-else>
                            <template #title>{{ t(item.name) }}：{{ item.value }}</template>
                            <span class="tags-style-text"> {{ t(item.name) }}：{{ item.value }}</span>
                        </a-tooltip>
                    </a-tag>
                </div>
                <div class="input-text" v-if="searchModelItem">{{ t(searchModelItem.name) }} :</div>
                <a-input class="search-style-input" v-model:value="searchInputValue" :bordered="false"
                    @pressEnter="onInputTag">
                    <template #suffix>
                        <SearchOutlined @click="onInputTag" />
                    </template>
                </a-input>
            </div>
            <a-button @click="on_search()" :icon="h(SearchOutlined)" type="primary">
                {{ t('public.search') }}
            </a-button>

            <a-button @click="searchTags = []; on_search()" :icon="h(SyncOutlined)">
                {{ t('public.reset') }}
            </a-button>
        </div>



        <div class="table-style">
            <a-space class="mb8 flex-space-between-center">
                <a-space>
                    <a-button type="primary" @click="handleDelete(tableState.selectedRowKeys)"
                        :disabled="tableState.selectedRowKeys.length === 0" danger>{{
                            t('public.deleteInBatches') }}</a-button>
                </a-space>
                <a-space>
                    <a-button :icon="h(PlusOutlined)" @click="modelOpen = true" type="primary">{{ t('public.add')
                        }}</a-button>
                    <a-dropdown-button trigger='click'>
                        {{ t('public.columnShow') }}
                        <template #overlay>
                            <a-menu>
                                <a-checkbox-group v-model:value="columnsCheckboxArray" @change="changeColumnsCheckbox">
                                    <div>
                                        <template v-for="item in columnsData" :key="item.title">
                                            <div class="table-style-columnsCheckbox" v-show="!item.noCancel">
                                                <a-checkbox :value="item.dataIndex">
                                                    {{ t(item.title) }}
                                                </a-checkbox>
                                            </div>
                                        </template>
                                    </div>
                                </a-checkbox-group>
                            </a-menu>
                        </template>
                    </a-dropdown-button>
                </a-space>
            </a-space>
            <a-table rowKey="id" :columns="tableColumns" :data-source="tableData" :indentSize="10"
                :pagination="paginationOpt"
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
                            <a-button type="link" v-has="'/role/delete'" danger @click="handleDelete([record.id])">{{
                            t('public.delete') }}</a-button>
                        </a-space>
                    </template>
                    <template v-if="column.dataIndex === 'createdAt' || column.dataIndex === 'updatedAt'">
                        {{ dayjs(record[column.dataIndex]).format("YYYY-MM-DD HH:mm:ss") }}
                    </template>
                </template>
                <template #customFilterDropdown>
                    <!-- ="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }" -->
                    <div class="search-style">
                        <a-input v-model:value="searchFrom.name" class="search-input"
                            :placeholder="t('role.roleName')" />
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


                <template #emptyText v-if="!permsJudge('/device/list')">
                    <tabNoPermissin />
                </template>
            </a-table>
        </div>

        <a-modal v-model:open="modelOpen" title="添加角色" :footer='null' :maskClosable="false"
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
            :confirm-loading="limitsButtonLoading" @ok="limitsOnOk" :maskClosable="false">
            <a-table :scroll="{ y: 500 }" :columns="limitsColumns" rowKey="path" :data-source="limitsJson"
                :row-selection="rowSelection" />
        </a-modal>

    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, reactive, h, onMounted } from 'vue';
import { useTableHooks } from "@/hooks/useTableHooks"
import { listRole, addRole, editRole, deleteRole, updateAuthority, getMenu } from "@/api/admin"
import { SearchOutlined, PlusOutlined, SyncOutlined ,DownOutlined} from '@ant-design/icons-vue';
import dayjs from 'dayjs';
import limitsJson from "@/assets/json/limits.json"
import { permsJudge } from "@/common/method/utils"
import { SearchFronModel, } from "@/common/type/type"
import tabNoPermissin from "@/components/public-dom/table-no-permission.vue"
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

let { paginationOpt, tableData, tableLoading, onInputTag, tableState, submitFormRef, onTableSelectChange, requestList, on_search, fromreset, handleDelete, searchInputValue, handleMenuClick, searchModelItem, searchTags, columnsCheckboxArray, tableColumns, initializeSearchTable, changeColumnsCheckbox } = useTableHooks({ listApi: listRole, deleteApi: deleteRole });

const columnsData = [
    {
        title: 'role.roleName',
        dataIndex: 'name',
        key: 'name',
        noCancel: true
    },

    {
        title: 'role.roleWeight',
        dataIndex: 'weight',
        key: 'weight',
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

const searchFronModel: SearchFronModel[] = [
    {
        key: 'name',
        name: "role.roleName"
    }
]
onMounted(() => {
    initializeSearchTable(searchFronModel, columnsData, 'roleColumnsStorage')
})

const modelOpen = ref<boolean>(false);
const formState = reactive<FormState>({
    name: "",
    weight: 0
});
const id = ref<number | undefined>(undefined);
const onRedact = (record: TableItem) => {
    for (const key in formState) formState[key] = record[key]
    id.value = record.id
    modelOpen.value = true

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


    // return
    api(fromData).then((res: { data: TableItem }) => {
        console.log(res)
        if (id.value === undefined) editLimits(res.data.id)
        modelOpen.value = false
        requestList()
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
    getMenu<{ id: number, type: number }>({ id, type: 2 }).then((res: { data: string[] }) => {
        let { data } = res
        rowSelection.value.selectedRowKeys = data
        limitsTableLoading.value = false
    })
}

const limitsOnOk = () => {
    console.log(rowSelection.value.selectedRowKeys)
    let { selectedRowKeys } = rowSelection.value
    limitsButtonLoading.value = true
    let limitsData: { path: string, method: string }[] = []
    selectedRowKeys.forEach((item: string | number) => {
        if (typeof (item) == 'number' !== true) {
            limitsData.push({
                path: item,
                method: "POST"
            })
        }
    })

    let fromData = {
        roleId,
        data: limitsData
    }
    updateAuthority(fromData).then((res: any) => {
        console.log(res)
        limitsButtonLoading.value = false
        limitsOpen.value = false
    })
}

</script>

<style lang="less" scoped>
.checkbox-son {
    width: 100%;
    margin-top: 10px;
}
</style>
