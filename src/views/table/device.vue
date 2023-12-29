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

        <a-modal v-model:open="addOpen" title="添加设备" :footer="null" :after-close="onCancel">
            <a-form :model="formState" name="basic" ref="formRef" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }"
                autocomplete="off" @finish="onFinish">
                <a-form-item :label="t('device.deviceName')" name="Name"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.deviceName')}` }]">
                    <a-input v-model:value="formState.Name"
                        :placeholder='`${t("public.pleaseInput")}${t("device.deviceName")}`' />
                </a-form-item>
                <a-form-item :label="t('device.deviceAddress')" name="Address"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.deviceAddress')}` }]">
                    <a-input v-model:value="formState.Address"
                        :placeholder='`${t("public.pleaseInput")}${t("device.deviceAddress")}`' />
                </a-form-item>

                <a-form-item :label="t('device.deviceOsKind')" name="OsKind"
                    :rules="[{ required: true, message: `${t('public.pleaseSelect')}${t('device.deviceOsKind')}` }]">

                    <a-radio-group v-model:value="formState.OsKind" name="radioGroup">
                        <a-radio v-for="item in systemTypeArr" :key="item.value" :value="item.value">{{ item.name
                        }}</a-radio>
                    </a-radio-group>
                </a-form-item>

                <a-form-item :label="t('device.deviceEncoding')" name="Address"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.deviceEncoding')}` }]">
                    <a-input v-model:value="formState.Encoding"
                        :placeholder='`${t("public.pleaseInput")}${t("device.deviceEncoding")}`' />
                </a-form-item>

                <a-form-item :label="t('public.Description')" name="Address"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('public.Description')}` }]">
                    <a-textarea v-model:value="formState.Description"
                        :placeholder='`${t("public.pleaseInput")}${t("public.Description")}`' />
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
// import type { Dayjs } from 'dayjs';
import type { FormInstance } from 'ant-design-vue';

import { addDevice, deviceList, deleteUser, edituser } from "@/api/admin"
import { SearchOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons-vue';

const { t } = useI18n()
const formRef = ref<FormInstance>();

let searchFrom = reactive({

});
type SearchType = {
    // user: string;
    // value1?: Dayjs
};

type formStateType = {
    id?: string
    Name: string
    Address: string
    OsKind: number | string
    Encoding: string
    DeptId: number
    Description: string
}
type listItemType = {
    id: string,
    userName: string,
    password: string
}

type SystemType = {
    name: string
    value: number
}

let { paginationOpt, tableData, searchFormRef, requestList, on_search, fromreset, handleDelete } = useTableHooks<SearchType>(searchFrom, { listApi: deviceList, deleteApi: deleteUser });
const addOpen = ref<boolean>(false);
const formState = reactive<formStateType>({
    Name: "",
    Address: '',
    OsKind: "", // 必填, 系统类型 1-Linux, 2-Windows
    Encoding: "",
    DeptId: 1,
    Description: ""
});

let systemTypeArr: SystemType[] = [{ name: "Linux", value: 1 }, { name: 'Windows', value: 2 }]





const columns = [{
    title: 'user.userName',
    dataIndex: 'userName',
},
{
    title: 'public.operation',
    dataIndex: 'operation',
}
]

const on_redact = (data: listItemType) => {
    console.log(data.userName)
    addOpen.value = true
    // formState.userName = data.userName
    // formState.password = data.password
    formState.id = data.id
}


const onFinish = () => {
    let api
    if (formState.id) {
        api = edituser
    } else {
        api = addDevice
    }
    api(formState).then(() => {
        addOpen.value = false
        requestList()
    })
};

const onCancel = () => {
    formRef.value!.resetFields();
}
</script>

<style lang="less" scoped></style>