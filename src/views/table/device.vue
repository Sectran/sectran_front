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
                    <a-button :icon="h(PlusOutlined)" @click="addRedactOpen = true" type="primary">{{ t('public.add')
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
            <a-table rowKey="id" :columns="tableColumns" :data-source="tableData" :pagination="paginationOpt"
                :row-selection="{ selectedRowKeys: tableState.selectedRowKeys, onChange: onTableSelectChange }"
                :loading="tableLoading">
                <template #headerCell="{ column }">
                    <span>{{ t(column.title) }}</span>
                </template>

                <template #bodyCell="{ column, record }">
                    <template v-if="column.dataIndex === 'operation'">
                        <a-space :size="8">
                            <a-button type="link" @click="on_redact(record)">{{ t('public.redact') }}</a-button>
                            <a-button type="link" danger @click="handleDelete([record.id])">{{ t('public.delete')
                                }}</a-button>
                            <a-button type="link" @click="on_deviceAccount(record.id, record.name)">{{
                            t('device.deviceAccount')
                        }}</a-button>
                        </a-space>
                    </template>
                    <template v-else-if="column.dataIndex === 'OsKind'">{{ record.OsKind === 1 ? 'Linux' : 'Windows'
                        }}</template>
                </template>

                <template #emptyText v-if="!permsJudge('/device/list')">
                    <tabNoPermissin />
                </template>
            </a-table>
        </div>
        <a-modal v-model:open="addRedactOpen" title="添加设备" :footer="null"
            :after-close="() => { fromreset(submitFormRef); deviceId = undefined }">
            <a-form :model="formState" name="basic" ref="submitFormRef" :label-col="{ span: 6 }"
                :wrapper-col="{ span: 18 }" autocomplete="off" @finish="onFinish">
                <a-form-item :label="t('device.deviceName')" name="name"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.deviceName')}` }]">
                    <a-input v-model:value="formState.name"
                        :placeholder='`${t("public.pleaseInput")}${t("device.deviceName")}`' />
                </a-form-item>
                <a-form-item :label="t('device.deviceAddress')" name="host"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.deviceAddress')}` }]">
                    <a-input v-model:value="formState.host"
                        :placeholder='`${t("public.pleaseInput")}${t("device.deviceAddress")}`' />
                </a-form-item>

                <a-form-item :label="t('device.deviceOsKind')" name="type"
                    :rules="[{ required: true, message: `${t('public.pleaseSelect')}${t('device.deviceOsKind')}` }]">
                    <a-select v-model:value="formState.type" class="input-width100">
                        <a-select-option v-for="item in  ['Linux', 'Windows']" :key="item" :value="item">{{ item
                            }}</a-select-option>
                    </a-select>
                </a-form-item>


                <a-form-item :label="t('public.Description')" name="description"
                    :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('public.Description')}` }]">
                    <a-textarea v-model:value="formState.description"
                        :placeholder='`${t("public.pleaseInput")}${t("public.Description")}`' />
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
                    <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </a-modal>
        <a-modal v-model:open="accountOpen" width="1000px" :title='`${deviceItem.deviceName}设备账号`'>
            <device-account :deviceId="deviceItem.deviceId" />
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { useTableHooks } from "@/hooks/useTableHooks"
import { ref, reactive, h, nextTick, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
// import type { Dayjs } from 'dayjs';
import deviceAccount from "./components/deviceAccount.vue"
import { addDevice, deviceList, deleteDevice, updateDevice } from "@/api/admin"
import { SearchOutlined, PlusOutlined, SyncOutlined, DownOutlined } from '@ant-design/icons-vue';
import { permsJudge } from "@/common/method/utils"
import { SearchFronModel, } from "@/common/type/type"
import tabNoPermissin from "@/components/public-dom/table-no-permission.vue"
const { t } = useI18n()
type SearchType = {
    name: string
    host: string
    description: string
};
type formStateType = {
    id?: number
    department_id: Number | string
    type: string
} & SearchType


let { paginationOpt, tableData, onInputTag, tableLoading, tableState, submitFormRef, onTableSelectChange, requestList, on_search, fromreset, handleDelete, searchInputValue, handleMenuClick, searchModelItem, searchTags, columnsCheckboxArray, tableColumns, initializeSearchTable, changeColumnsCheckbox } = useTableHooks({ listApi: deviceList, deleteApi: deleteDevice });
const addRedactOpen = ref<boolean>(false);
const formState = reactive<formStateType>({
    name: "",
    host: '',
    department_id: "",
    description: "",
    type: ""
});

const columnsData = [{
    title: 'device.deviceName',
    dataIndex: 'name',
    noCancel: true

}, {
    title: 'device.deviceAddress',
    dataIndex: 'host',
}, {
    title: 'device.deviceOsKind',
    dataIndex: 'type',
}, {
    title: 'public.Description',
    dataIndex: 'description',
},

{
    title: 'public.operation',
    dataIndex: 'operation',
}
]


const searchFronModel: SearchFronModel[] = [
    {
        key: 'name',
        name: "device.deviceName"
    }, {
        key: 'host',
        name: "device.deviceAddress"
    }, {
        key: 'description',
        name: "public.Description"
    }
]
onMounted(() => {
    initializeSearchTable(searchFronModel, columnsData, 'deviceColumnsStorage')
})

const accountOpen = ref<boolean>(false);
const deviceItem = reactive<{ deviceName: string, deviceId: number }>({ deviceName: "", deviceId: 0 })
const on_deviceAccount = (id: number, name: string) => {
    deviceItem.deviceId = id
    deviceItem.deviceName = name
    console.log(deviceItem.deviceName);
    accountOpen.value = true
}
let deviceId: number | undefined = undefined
const on_redact = (data: formStateType) => {
    addRedactOpen.value = true
    nextTick(() => {
        for (const key in formState) {
            formState[key] = data[key]
        }
    })
    deviceId = data.id
}
const onFinish = () => {
    let paramFrom = { ...formState }
    let api = addDevice
    let user = JSON.parse(localStorage.getItem("user") as string)
    if (deviceId) {
        api = updateDevice
        paramFrom.id = deviceId
    } else {
        paramFrom.department_id = user.department_id
    }
    api(paramFrom).then(() => {
        addRedactOpen.value = false
        requestList()
    })
};

</script>

<style lang="less" scoped></style>