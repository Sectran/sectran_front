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
                        @close="() => {searchTags.splice(index, 1);on_search()}">
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
                    <a-button v-has="'/user/delete'" type="primary" @click="handleDelete(tableState.selectedRowKeys)"
                        :disabled="tableState.selectedRowKeys.length === 0" danger>{{
                            t('public.deleteInBatches') }}</a-button>
                </a-space>
                <a-space>
                    <a-button v-has="'/user/create'" :icon="h(PlusOutlined)" @click="onOperate()" type="primary">{{
                            t('public.add')
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

            <a-table :loading="tableLoading" rowKey="id" :columns="tableColumns" :data-source="tableData"
                :pagination="paginationOpt"
                :row-selection="{ selectedRowKeys: tableState.selectedRowKeys, onChange: onTableSelectChange }">
                <template #headerCell="{ column }">
                    <span>{{ t(column.title) }}</span>
                </template>
                <template #bodyCell="{ column, record }">
                    <template v-if="column.dataIndex === 'updatedAt'">
                        {{ Dayjs(record[column.dataIndex]).format("YYYY-MM-DD HH:mm:ss") }}
                    </template>
                    <template v-if="column.dataIndex === 'description'">
                        <div @click="Modal.success({
                            title: `${t('public.Description')}`,
                            content: record[column.dataIndex],
                        });">
                            {{ record[column.dataIndex].length > 34 ? record[column.dataIndex].slice(0, 34) :
                            record[column.dataIndex]
                            }}
                        </div>
                    </template>
                    <template v-if="column.dataIndex === 'operation'">
                        <div class="operation-style">
                            <a-button type="link" class="operation-style-button" v-has="'/user/update'"
                                @click="onOperate(record)">{{ t('public.redact')
                                }}</a-button>
                            <a-button type="link" class="operation-style-button" v-has="'/user/delete'" danger
                                @click="handleDelete([record.id])">{{
                            t('public.delete')
                        }}</a-button>
                        </div>
                    </template>
                    <template v-else-if="column.dataIndex === 'status'">
                        <a-switch @change="(value: any) => handleSwitchChange(value, record)"
                            :checked="record.status" />
                    </template>
                </template>
                <template #emptyText v-if="!permsJudge('/user/list')">
                    <tabNoPermissin />
                </template>
            </a-table>
        </div>
        <a-modal v-model:open="addRedactOpen" :title="t('user.addUser')" :footer="null"
            :after-close="() => { fromreset(submitFormRef); id = undefined }">
            <a-form :model="formState" name="basic" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }"
                ref="submitFormRef" autocomplete="off" @finish="onFinish">
                <template v-if="id === undefined">
                    <a-form-item :label="t('user.account')" name="account"
                        :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('user.account')}` }]">
                        <a-input v-model:value="formState.account"
                            :placeholder='`${t("public.pleaseInput")}${t("user.account")}`' />
                    </a-form-item>
                </template>
                <a-form-item :label="t('user.mame')" name="name"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('user.mame')}` }]">
                    <a-input v-model:value="formState.name"
                        :placeholder='`${t("public.pleaseInput")}${t("user.mame")}`' />
                </a-form-item>

                <a-form-item :label="t('user.password')" name="password"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('user.password')}` }]">
                    <a-input-password v-model:value="formState.password"
                        :placeholder='`${t("public.pleaseInput")}${t("user.userName")}`' />
                </a-form-item>

                <a-form-item :label="t('public.departmentName')" name="departmentId"
                    :rules="[{ required: true, message: `${t('public.pleaseSelect')}${t('public.departmentName')}` }]">
                    <a-select v-model:value="formState.departmentId"
                        :placeholder='`${t("public.pleaseInput")}${t("public.departmentName")}`' style="width: 100%"
                        :filter-option="false" :not-found-content="departmentState.fetching ? undefined : null"
                        :options="departmentState.data"
                        @search="(value: string) => searchFun(value, departmentState, listDepartment, { deep: 0, id: user.department_id })"
                        show-search :field-names="{ label: 'name', value: 'id' }">
                        <template v-if="departmentState.fetching" #notFoundContent>
                            <a-spin size="small" />
                        </template>
                    </a-select>
                </a-form-item>
                <a-form-item :label="t('public.roleName')" name="roleId"
                    :rules="[{ required: true, message: `${t('public.pleaseSelect')}${t('public.roleId')}` }]">
                    <a-select v-model:value="formState.roleId"
                        :placeholder='`${t("public.pleaseInput")}${t("public.roleName")}`' style="width: 100%"
                        :filter-option="false" :not-found-content="roleState.fetching ? undefined : null"
                        :options="roleState.data" @search="(value: string) => searchFun(value, roleState, listRole)"
                        show-search :field-names="{ label: 'name', value: 'id' }">
                        <template v-if="roleState.fetching" #notFoundContent>
                            <a-spin size="small" />
                        </template>
                    </a-select>
                </a-form-item>


                <a-form-item :label="t('user.userState')" name="status"
                    :rules="[{ required: true, message: `${t('public.pleaseSelect')}${t('user.userState')}` }]">
                    <a-radio-group v-model:value="formState.status" name="radioGroup">
                        <a-radio v-for="item in [{ value: true, name: '启用' }, { value: false, name: '禁用' }]"
                            :key="item.value" :value="item.value">{{ item.name
                            }}</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :label="t('user.telephone')" name="phoneNumber">
                    <a-input v-model:value="formState.phoneNumber"
                        :placeholder='`${t("public.pleaseInput")}${t("user.telephone")}`' />
                </a-form-item>

                <a-form-item :label="t('user.usereEmail')" name="email">
                    <a-input v-model:value="formState.email"
                        :placeholder='`${t("public.pleaseInput")}${t("user.usereEmail")}`' />
                </a-form-item>
                <a-form-item :label="t('public.Description')" name="description">
                    <a-textarea v-model:value="formState.description"
                        :placeholder='`${t("public.pleaseInput")}${t("public.Description")}`' />
                </a-form-item>
                <div class="pop-button">
                    <a-button @click="() => { addRedactOpen = false }" class="search-button-right " tml-type="submit">{{
                            t('public.cancel') }}</a-button>
                    <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>

                </div>

            </a-form>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { useTableHooks } from "@/hooks/useTableHooks"
import { ref, reactive, h, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
import Dayjs from 'dayjs';
import { addUser, listUser, deleteUser, updateUser, listDepartment, listRole } from "@/api/admin"
import { SearchOutlined, PlusOutlined, SyncOutlined, DownOutlined } from '@ant-design/icons-vue';
import { message, Modal } from 'ant-design-vue';
import tabNoPermissin from "@/components/public-dom/table-no-permission.vue"
import { debounce } from 'lodash';
import { SearchFronModel, } from "@/common/type/type"
import { permsJudge } from "@/common/method/utils"
let { paginationOpt, tableData, submitFormRef, tableState, tableLoading, onTableSelectChange, requestList, fromreset, handleDelete, onInputTag, searchInputValue, handleMenuClick, searchModelItem, searchTags, columnsCheckboxArray, tableColumns, initializeSearchTable, operateTags, changeColumnsCheckbox, on_search } = useTableHooks({ listApi: listUser, deleteApi: deleteUser });
const { t } = useI18n()
const id = ref<number | undefined>(undefined);
type formStateType = {
    id?: number | undefined
    account: string
    password: string
    name: string
    departmentId: number | string
    status: boolean
    description: string
    roleId: number | string
    email: string
    phoneNumber: string
    departmentName?: string
    roleName?: string
}

const addRedactOpen = ref<boolean>(false);
const formState = reactive<formStateType>({
    name: "",
    account: "",
    password: "",
    departmentId: "",
    description: "",
    roleId: "",
    email: "",
    phoneNumber: "",
    status: true
});
const searchFronModel: SearchFronModel[] = [
    {
        key: 'account',
        name: "user.account"
    }, {
        key: 'name',
        name: "user.userName"
    }, {
        key: 'departmentName',
        name: "public.departmentName"
    }, {
        key: 'roleName',
        name: "public.roleName"
    }, {
        key: 'status',
        name: "public.status",
        children: [
            {
                value: true,
                name: "public.open",
                key: "status",
                disposefun: (value: any) => {
                    operateTags(true, value.key)
                    on_search()
                }
            }, {
                value: false,
                name: "public.close",
                key: "status",
                disposefun: (value: any) => {
                    operateTags(false, value.key)
                    on_search()
                }
            }
        ]

    }
]
onMounted(() => {
    initializeSearchTable(searchFronModel, columnsData, 'userColumnsStorage')
})

const columnsData = [{
    title: 'user.account',
    dataIndex: 'account',
    noCancel: true
}, {
    title: 'user.userName',
    dataIndex: 'name',
}, {
    title: 'public.departmentName',
    dataIndex: 'departmentName',
}, {
    title: 'public.roleName',
    dataIndex: 'roleName',
}, {
    title: 'user.telephone',
    dataIndex: 'phoneNumber',
}, {
    title: 'public.Description',
    dataIndex: 'description',
}, {
    title: 'public.status',
    dataIndex: 'status',
}, {
    title: 'public.operation',
    dataIndex: 'operation',
}]

const handleSwitchChange = (value: any, record: formStateType) => {
    updateUser({ id: record.id, status: value }).then(() => {
        requestList()
    })
}



const departmentState = reactive({
    data: [],
    fetching: false,
});

const roleState = reactive({
    data: [],
    fetching: false,
});

let user = JSON.parse(localStorage.getItem('user') as string);
const searchFun = debounce((value: string, State: any, api: Function, obj: any) => {
    State.data = [];
    State.fetching = true;
    api({ page: 1, pageSize: 10, name: value, ...obj }).then((res: any) => {
        let { data } = res.data
        State.data = data;
        State.fetching = false;
    })
}, 300);

const onOperate = (record?: formStateType) => {
    let departmentName = ""
    let roleName = ""
    if (record) {
        departmentName = record.departmentName || ""
        roleName = record.roleName || ""
        for (const key in formState) formState[key] = record[key]
        id.value = record.id
    }
    searchFun(departmentName, departmentState, listDepartment, { deep: 0, id: user.department_id });
    setTimeout(function () {
        searchFun(roleName, roleState, listRole)
    }, 500);
    addRedactOpen.value = true
}
const onFinish = () => {
    let api
    let fromData: any
    if (id.value !== undefined) {
        api = updateUser
        fromData = {
            id: id.value,
            name: formState.name,
            email: formState.email,
            status: formState.status,
        }
    } else {
        api = addUser
        fromData = { ...formState }
    }
    api(fromData).then(() => {
        addRedactOpen.value = false
        requestList()
        message.success(t('message.success'));
    })
};

</script>

<style lang="less" scoped></style>