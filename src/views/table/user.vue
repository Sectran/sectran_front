<template>
    <div class="tablePage-style">
        <div class="table-nav">

            <a-form layout="inline" :model="searchFrom" ref="searchFormRef">
                <a-row :gutter="[20, 16]">
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('user.userName')" name="user">
                            <a-input v-model:value="searchFrom.user" placeholder="请输入用户名" />
                        </a-form-item>
                    </a-col>
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('user.userName')" name="value">
                            <a-date-picker v-model:value="searchFrom.value" />
                        </a-form-item>
                    </a-col>
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item>
                            <a-space>
                                <a-button :icon="h(SearchOutlined)" type="primary" @click="on_search()">{{
                                    t('public.search') }}</a-button>
                                <a-button :icon="h(SyncOutlined)" @click="fromreset()">{{ t('public.reset')
                                }}</a-button>
                            </a-space>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>

        </div>
        <a-space class="mb8 justify-end">
            <a-button :icon="h(PlusOutlined)" @click="addOpen = true" type="primary">{{ t('public.add') }}</a-button>
        </a-space>
        <a-table class="table-style" :columns="columns" :data-source="tableData" :pagination="paginationOpt">
            <template #headerCell="{ column }">
                <span>{{ t(column.title) }}</span>
            </template>

            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space :size="8">
                        <a-button type="link" @click="on_redact(record)">{{ t('public.redact') }}</a-button>
                        <a-button type="link" danger @click="handleDelete(record.id)">{{ t('public.delete') }}</a-button>
                    </a-space>
                </template>
            </template>
        </a-table>



        <a-modal v-model:open="addOpen" title="添加用户" :footer="null" :after-close="onCancel">
            <a-form :model="formState" name="basic" ref="formRef" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }"
                autocomplete="off" @finish="onFinish">
                <a-form-item :label="t('user.userName')" name="userName"
                    :rules="[{ required: true, message: t('user.usernameVerification') }]">
                    <a-input v-model:value="formState.userName" />
                </a-form-item>

                <a-form-item :label="t('user.password')" name="password"
                    :rules="[{ required: true, message: t('user.passwordVerification') }]">
                    <a-input v-model:value="formState.password" />
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
import { ref, reactive, h } from 'vue';
import { useI18n } from 'vue-i18n'
import type { Dayjs } from 'dayjs';
import type { FormInstance } from 'ant-design-vue';
import { adduser, listUser, deleteUser, edituser } from "@/api/admin"
import { SearchOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons-vue';

const { t } = useI18n()
const formRef = ref<FormInstance>();

let searchFrom = reactive({
    user: "",
    value: ""
});
type SearchType = {
    user: string;
    value1?: Dayjs
};

type formStateType = {
    id?: string;
    userName: string;
    password: string;
}
type listItemType = {
    id: string,
    userName: string,
    password: string
}

let { paginationOpt, tableData, searchFormRef, requestList, on_search, fromreset, handleDelete } = useTableHooks<SearchType>(searchFrom, { listApi: listUser, deleteApi: deleteUser });
const addOpen = ref<boolean>(false);
const formState = reactive<formStateType>({
    userName: '',
    password: '',
});
const columns = [{
    title: 'user.userName',
    dataIndex: 'userName',
},
// {
//     title: '修改时间',
//     dataIndex: 'revampTime',
// },

{
    title: 'public.operation',
    dataIndex: 'operation',
}
]

const on_redact = (data: listItemType) => {
    console.log(data.userName)
    addOpen.value = true
    formState.userName = data.userName
    // formState.password = data.password
    formState.id = data.id
}


const onFinish = () => {
    let api
    if (formState.id) {
        api = edituser
    } else {
        api = adduser
    }
    api(formState).then(() => {
        addOpen.value = false
        requestList()
    })
};

const onCancel = () => {
    // console.log(formRef.value.resetFields)
    formRef.value!.resetFields();
    console.log(formState)
}
</script>

<style lang="less" scoped></style>