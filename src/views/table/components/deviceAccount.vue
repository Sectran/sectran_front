<template>
    <div class="tablePage-style">
        <div class="table-nav">
            <a-form :model="searchFrom" ref="searchFormRef">
                <a-row :gutter="[20, 0]">
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

        <a-modal v-model:open="addOpen" title="添加设备账号" :footer="null" :after-close="onCancel">
            <a-form :model="formState" name="basic" ref="formRef" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }"
                autocomplete="off" @finish="onFinish">

                <a-form-item :label="t('device.deviceUsername')" name="Username"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.deviceUsername')}` }]">
                    <a-input v-model:value="formState.Username"
                        :placeholder='`${t("public.pleaseInput")}${t("device.deviceUsername")}`' />
                </a-form-item>

                <a-form-item :label="t('device.Password')" name="Password"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.Password')}` }]">
                    <a-input v-model:value="formState.Password"
                        :placeholder='`${t("public.pleaseInput")}${t("device.Password")}`' />
                </a-form-item>

                <a-form-item :label="t('device.IsAdministrator')" name="IsAdministrator"
                    :rules="[{ required: true, message: `${t('public.pleaseSelect')}${t('device.IsAdministrator')}` }]">

                    <a-radio-group v-model:value="formState.IsAdministrator" name="radioGroup">
                        <a-radio v-for="item in systemTypeArr" :key="item.value" :value="item.value">{{ item.name
                        }}</a-radio>
                    </a-radio-group>
                </a-form-item>

                <a-form-item :label="t('device.Port')" name="Port"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.Port')}` }]">
                    <a-input-number v-model:value="formState.Port" class="input-width100"
                        :placeholder='`${t("public.pleaseInput")}${t("device.Port")}`' />
                </a-form-item>


                <a-form-item :label="t('device.Protocol')" name="Protocol"
                    :rules="[{ required: true, message: `${t('public.pleaseSelect')}${t('device.Protocol')}` }]">
                    <a-select ref="select" v-model:value="formState.Protocol"
                        :placeholder='`${t("public.pleaseSelect")}${t("device.Protocol")}`'>
                        <a-select-option v-for="item in ['SSH', 'TELNET', 'RDP', 'FTP']" :key="item" :value="item">{{ item
                        }}</a-select-option>
                    </a-select>
                </a-form-item>



                <template v-if="formState.Protocol === 'SSH'">
                    <a-form-item :label="t('device.PrivateKey')" name="PrivateKey"
                        :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.PrivateKey')}` }]">
                        <a-input v-model:value="formState.PrivateKey"
                            :placeholder='`${t("public.pleaseInput")}${t("device.PrivateKey")}`' />
                    </a-form-item>
                    <a-form-item :label="t('device.PrivateKeyPassword')" name="PrivateKeyPassword"
                        :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.PrivateKeyPassword')}` }]">
                        <a-input v-model:value="formState.PrivateKeyPassword"
                            :placeholder='`${t("public.pleaseInput")}${t("device.PrivateKeyPassword")}`' />
                    </a-form-item>
                </template>
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
import type { FormInstance } from 'ant-design-vue';

import { addDeviceAccount, listDeviceAccount, deleteDeviceAccount, updateDeviceAccount } from "@/api/admin"
import { SearchOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons-vue';
const { t } = useI18n()
const props = defineProps<{
    deviceId: number
}>()

type SearchType = {
    DeviceId: number
};

type formStateType = {
    Id?: number | string
    DeviceId: number
    Username: string
    Password: string
    IsAdministrator: number
    Protocol: string
    Port: string | number
    PrivateKeyPassword: string
    PrivateKey: string
}


type SystemType = {
    name: string
    value: number
}
const searchFrom = reactive<SearchType>({
    DeviceId: props.deviceId
});


let { paginationOpt, tableData, searchFormRef, tableState, onTableSelectChange, requestList, on_search, fromreset, handleDelete } = useTableHooks<SearchType>(searchFrom, { listApi: listDeviceAccount, deleteApi: deleteDeviceAccount });




const formRef = ref<FormInstance>();


const addOpen = ref<boolean>(false);
const formState = reactive<formStateType>({
    DeviceId: props.deviceId,
    Username: "",
    Password: "",
    IsAdministrator: "",
    Protocol: "",
    Port: "",
    PrivateKeyPassword: "",
    PrivateKey: "",

});

let systemTypeArr: SystemType[] = [{ name: "是", value: 1 }, { name: '否', value: 2 }]
const columns = [{
    title: 'device.deviceUsername',
    dataIndex: 'Username',
}, {
    title: 'device.Port',
    dataIndex: 'Port',
}, {
    title: 'device.Protocol',
    dataIndex: 'Protocol',
}, {
    title: 'device.PrivateKey',
    dataIndex: 'PrivateKey',
}, {
    title: 'device.IsAdministrator',
    dataIndex: 'IsAdministrator',
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

    formState.Id = data.Id
}
const onFinish = () => {
    let api = formState.Id ? updateDeviceAccount : addDeviceAccount
    api(formState).then(() => {
        addOpen.value = false
        requestList()
    })
};

const onCancel = () => {
    formRef.value!.resetFields();
    if (formState.Id) delete formState.Id
}




</script>

<style lang="less" scoped></style>