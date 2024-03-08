<template>
    <div class="tablePage-style">
        <div class="table-nav">

            <a-form :model="searchFrom" ref="searchFormRef">
                <a-row :gutter="[20, 0]">
                    <!-- <a-col :lg="8" :md="12" :sm="24">
                        <a-form-item :label="t('user.userName')" name="user">
                            <a-input v-model:value="searchFrom.user" :placeholder="t('user.usernamePlaceholder')" />
                        </a-form-item>
                    </a-col>
                    <a-col :lg="8" :md="12" :sm="24">
                        <a-form-item :label="t('user.userId')" name="value">
                            <a-input v-model:value="searchFrom.value" :placeholder="t('user.userIdPlaceholder')" />
                        </a-form-item>
                    </a-col>
                    <a-col :lg="8" :md="12" :sm="24">
                        <a-form-item :label="t('user.usereEmail')" name="value">
                            <a-input v-model:value="searchFrom.value" :placeholder="t('user.userEmailPlaceholder')" />
                        </a-form-item>
                    </a-col> -->
                    <a-col :lg="8" :md="12" :sm="24">
                        <a-form-item>
                            <a-space>
                                <a-button :icon="h(SearchOutlined)" type="primary" @click="on_search()">{{
                                    t('public.search') }}</a-button>
                                <a-button :icon="h(SyncOutlined)" @click="fromreset(searchFormRef)">{{ t('public.reset')
                                }}</a-button>
                            </a-space>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>

        </div>
        <a-space class="mb8 flex-space-between-center">
            <a-space>
                <a-button type="primary" @click="handleDelete(tableState.selectedRowKeys)"
                    :disabled="tableState.selectedRowKeys.length === 0" danger>{{
                        t('public.deleteInBatches') }}</a-button>
            </a-space>
            <a-space>
                <a-button :icon="h(PlusOutlined)" @click="addOpen = true" type="primary">{{ t('public.add') }}</a-button>
            </a-space>
        </a-space>
        <a-table rowKey="Id" class="table-style" :columns="columns" :data-source="tableData" :pagination="paginationOpt"
            :row-selection="{ selectedRowKeys: tableState.selectedRowKeys, onChange: onTableSelectChange }">
            <template #headerCell="{ column }">
                <span>{{ t(column.title) }}</span>
            </template>

            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space :size="8">
                        <a-button type="link" @click="on_redact(record)">{{ t('public.redact') }}</a-button>
                        <a-button type="link" danger @click="handleDelete([record.Id])">{{ t('public.delete') }}</a-button>
                    </a-space>
                </template>
                <template v-else-if="column.dataIndex === 'OsKind'">{{ record.OsKind === 1 ? 'Linux' : 'Windows'
                }}</template>
            </template>
        </a-table>

        <a-modal v-model:open="addOpen" :title="t('user.addUser')" :footer="null" :after-close="() => { fromreset(submitFormRef); id = undefined }">
            <a-form :model="formState" name="basic"  :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }"
            ref="submitFormRef"    autocomplete="off" @finish="onFinish">

                <a-form-item :label="t('user.userName')" name="account"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('user.userName')}` }]">
                    <a-input v-model:value="formState.account"
                        :placeholder='`${t("public.pleaseInput")}${t("user.userName")}`' />
                </a-form-item>

                <a-form-item :label="t('user.password')" name="password"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('user.password')}` }]">
                    <a-input v-model:value="formState.password"
                        :placeholder='`${t("public.pleaseInput")}${t("user.userName")}`' />
                </a-form-item>

                <a-form-item :label="t('user.mame')" name="name"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('user.mame')}` }]">
                    <a-input v-model:value="formState.name" :placeholder='`${t("public.pleaseInput")}${t("user.mame")}`' />
                </a-form-item>
                <!-- <a-form-item :label="t('user.userState')" name="IsDisable"
                    :rules="[{ required: true, message: `${t('public.pleaseSelect')}${t('user.userState')}` }]">
                    <a-radio-group v-model:value="formState.IsDisable" name="radioGroup">
                        <a-radio v-for="item in [{ value: 1, name: '启用' }, { value: 2, name: '禁用' }]" :key="item.value"
                            :value="item.value">{{ item.name
                            }}</a-radio>
                    </a-radio-group>
                </a-form-item> -->
                <a-form-item :label="t('user.usereEmail')" name="email">
                    <a-input v-model:value="formState.email" :placeholder='`${t("public.pleaseInput")}${t("user.usereEmail")}`' />
                </a-form-item>
                <a-form-item :label="t('user.telephone')" name="phoneNumber">
                    <a-input v-model:value="formState.phoneNumber" :placeholder='`${t("public.pleaseInput")}${t("user.telephone")}`' />
                </a-form-item>
                <a-form-item :label="t('public.departmentID')" name="description">
                    <a-textarea v-model:value="formState.description"
                        :placeholder='`${t("public.pleaseInput")}${t("public.departmentID")}`' />
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
                    <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { useTableHooks } from "@/hooks/useTableHooks"
import { ref, reactive, h, nextTick } from 'vue';
import { useI18n } from 'vue-i18n'
// import type { Dayjs } from 'dayjs';
import { addUser, listUser, deleteUser, updateUser } from "@/api/admin"
import { SearchOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons-vue';
let searchFrom = reactive({

});
let { paginationOpt, tableData, searchFormRef,submitFormRef, tableState, onTableSelectChange, requestList, on_search, fromreset, handleDelete } = useTableHooks<SearchType>(searchFrom, { listApi: listUser, deleteApi: deleteUser });
const { t } = useI18n()
const id = ref<number | undefined>(undefined);
type SearchType = {
    // user: string;
    // value1?: Dayjs
};

type formStateType = {
    id?: number | string
    account: string
    password: string
    name: string
    DeptId: number | string
    // IsDisable: number
    description: string
    RoleId: number | string
    email: string
    phoneNumber: string
}


// type SystemType = {
//     name: string
//     value: number
// }


const addOpen = ref<boolean>(false);
const formState = reactive<formStateType>({

    name: "",
    account: "",
    password: "",

    DeptId: 1,
    description: "",
    RoleId: 1,
    email: "",
    phoneNumber: "",
    // IsDisable: 1
});

const columns = [{
    title: 'user.userName',
    dataIndex: 'account',
}, {
    title: 'user.password',
    dataIndex: 'password',
}, {
    title: 'user.mame',
    dataIndex: 'name',
}, {
    title: 'public.departmentID',
    dataIndex: 'DeptId',
}, {
    title: 'public.roleId',
    dataIndex: 'RoleId',
}, {
    title: 'user.usereEmail',
    dataIndex: 'email',
}, {
    title: 'user.telephone',
    dataIndex: 'phoneNumber',
},
{
    title: 'public.departmentID',
    dataIndex: 'description',
},
{
    title: 'public.operation',
    dataIndex: 'operation',
}
]

const on_redact = (data: formStateType) => {
    addOpen.value = true
    nextTick(() => {
        for (const key in formState) {
            formState[key] = data[key]
        }
    })
    // formState.Id = data.Id
}
const onFinish = () => {
    // let api = formState.Id ? updateUser : addUser
    // api(formState).then(() => {
    //     addOpen.value = false
    //     requestList()
    // })
};

</script>

<style lang="less" scoped></style>