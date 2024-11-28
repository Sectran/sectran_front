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
                        @close="() => { searchTags.splice(index, 1); on_search(extraSearchModel) }">
                        <a-tooltip v-if="item.name === 'Linux' || item.name === 'Windows'">
                            <template #title>系统类型：{{ item.value ? '开启' : "关闭" }}</template>
                            <span class="tags-style-text"> 系统类型：{{ item.value ? '开启' : "关闭"
                                }}</span>
                        </a-tooltip>
                        <a-tooltip v-else-if="item.key === 'departmentId'">
                            <template #title>{{ t(item.name) }}：{{ departmentOption.name }}</template>
                            <span class="tags-style-text"> {{ t(item.name) }}：{{ departmentOption.name }}</span>
                        </a-tooltip>

                        <a-tooltip v-else>
                            <template #title>{{ t(item.name) }}：{{ item.value }}</template>
                            <span class="tags-style-text"> {{ t(item.name) }}：{{ item.value }}</span>
                        </a-tooltip>
                    </a-tag>
                </div>
                <div class="input-text" v-if="searchModelItem">{{ t(searchModelItem.name) }} :</div>
                <a-select v-if="searchModelItem?.key == 'departmentId'" :key="departmentKey"
                    v-model:value="extraSearchModel.departmentId"
                    :placeholder='`${t("public.pleaseSelect")}${t("public.departmentName")}`' :filter-option="false"
                    :not-found-content="searchDepartmentState.fetching ? undefined : null"
                    :options="searchDepartmentState.data"
                    @search="(value: string) => searchFun(value, searchDepartmentState, listDepartment, { deep: 0, id: user.department_id })"
                    show-search :field-names="{ label: 'name', value: 'id' }"
                    @change="(values: number, option: any) => departmentChange(values, option)" :bordered="false"
                    class="search-style-input" :autoClearSearchValue="true">
                    <template v-if="searchDepartmentState.fetching" #notFoundContent>
                        <a-spin size="small" />
                    </template>
                </a-select>
                <a-input v-else class="search-style-input" v-model:value="searchInputValue" :bordered="false"
                    @pressEnter="onInputTag"></a-input>

            </div>


            <a-button @click="onInputTag" :icon="h(SearchOutlined)" type="primary">
                {{ t('public.search') }}
            </a-button>

            <a-button @click="searchTags = []; extraSearchReset(); on_search(extraSearchModel)" :icon="h(SyncOutlined)">
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
                    <a-button :icon="h(PlusOutlined)" @click="onOperate()" type="primary">{{ t('public.add')
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
                            <a-button type="link" @click="onOperate(record)">{{ t('public.redact') }}</a-button>
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
        <a-modal v-model:open="modelOpen" title="添加设备" :footer="null"
            :after-close="() => { fromreset(submitFormRef); deviceId = undefined }">
            <a-watermark v-bind="store.state.globalConfiguration.watermarkConfiguration">
                <a-form :model="formState" name="basic" ref="submitFormRef" :label-col="{ span: 6 }"
                    :wrapper-col="{ span: 18 }" autocomplete="off" @finish="onFinish">
                    <a-form-item :label="t('device.deviceName')" name="name"
                        :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.deviceName')}` }]">
                        <a-input v-model:value="formState.name"
                            :placeholder='`${t("public.pleaseInput")}${t("device.deviceName")}`' />
                    </a-form-item>
                    <a-form-item :label="t('public.departmentName')" name="departmentId"
                        :rules="[{ required: true, message: `${t('public.pleaseSelect')}${t('public.departmentName')}` }]">
                        <a-select v-model:value="formState.departmentId"
                            :placeholder='`${t("public.pleaseSelect")}${t("public.departmentName")}`'
                            style="width: 100%" :filter-option="false"
                            :not-found-content="departmentState.fetching ? undefined : null"
                            :options="departmentState.data"
                            @search="(value: string) => searchFun(value, departmentState, listDepartment, { deep: 0, id: user.department_id })"
                            show-search :field-names="{ label: 'name', value: 'id' }">
                            <template v-if="departmentState.fetching" #notFoundContent>
                                <a-spin size="small" />
                            </template>
                        </a-select>
                    </a-form-item>
                    <a-form-item :label="t('device.deviceAddress')" name="host"
                        :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.deviceAddress')}` }, { validator: validateDeviceAddress }]"
                        :extra='`${t("public.deviceAddressAstrict")}`'>
                        <a-input v-model:value="formState.host"
                            :placeholder='`${t("public.pleaseInput")}${t("device.deviceAddress")}`' />
                    </a-form-item>

                    <a-form-item :label="t('device.deviceOsKind')" name="type"
                        :rules="[{ required: true, message: `${t('public.pleaseSelect')}${t('device.deviceOsKind')}` }]">
                        <a-select v-model:value="formState.type" class="input-width100"
                            :placeholder='`${t("public.pleaseSelect")}${t("device.deviceOsKind")}`'>
                            <a-select-option v-for="item in ['Linux', 'Windows']" :key="item" :value="item">{{ item
                                }}</a-select-option>
                        </a-select>
                    </a-form-item>


                    <a-form-item :label="t('public.Description')" name="description"
                        :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('public.Description')}` }]">
                        <a-textarea v-model:value="formState.description"
                            :placeholder='`${t("public.pleaseInput")}${t("public.Description")}`' />
                    </a-form-item>
                    <div class="pop-button">
                        <a-button @click="() => { modelOpen = false }" class="search-button-right " tml-type="submit">{{
                            t('public.cancel') }}</a-button>
                        <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
                    </div>

                </a-form>
            </a-watermark>
        </a-modal>
        <a-modal v-model:open="accountOpen" width="1000px" :title='`${deviceItem.deviceName}设备账号`'>
            <a-watermark v-bind="store.state.globalConfiguration.watermarkConfiguration">
                <device-account :deviceId="deviceItem.deviceId" />
            </a-watermark>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { useTableHooks } from "@/hooks/useTableHooks"
import { ref, reactive, h, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
// import type { Dayjs } from 'dayjs';
import deviceAccount from "./components/deviceAccount.vue"
import { addDevice, deviceList, deleteDevice, updateDevice, listDepartment } from "@/api/admin"
import { SearchOutlined, PlusOutlined, SyncOutlined, DownOutlined } from '@ant-design/icons-vue';
import { permsJudge } from "@/common/method/utils"
import { SearchFronModel, } from "@/common/type/type"
import tabNoPermissin from "@/components/public-dom/table-no-permission.vue"
import { useStore } from 'vuex'
import { debounce } from 'lodash';
const store = useStore()
const { t } = useI18n()
type SearchType = {
    name: string
    host: string
    description: string
    department_id?: Number | string
};
type formStateType = {
    [key: string]: any
    id?: number
    type: string | undefined
    departmentId: number | string | undefined
    departmentName?: string
} & SearchType

let user = JSON.parse(localStorage.getItem('user') as string);
let { paginationOpt, tableData, onInputTag, tableLoading, tableState, submitFormRef, onTableSelectChange, requestList, on_search, fromreset, handleDelete, searchInputValue, handleMenuClick, operateTags, searchModelItem, searchTags, columnsCheckboxArray, tableColumns, initializeSearchTable, changeColumnsCheckbox } = useTableHooks({ listApi: deviceList, deleteApi: deleteDevice });
const modelOpen = ref<boolean>(false);
const formState = reactive<formStateType>({
    name: "",
    host: '',
    description: "",
    type: undefined,
    departmentId: undefined,
});



const columnsData = [{
    title: 'device.deviceName',
    dataIndex: 'name',
    noCancel: true

}, {
    title: 'public.departmentName',
    dataIndex: 'deptName',
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
        key: 'departmentId',
        name: "public.departmentName"
    },
    {
        key: 'type',
        name: "public.type",
        children: [
            {
                name: "public.Linux",
                key: "type",
                disposefun: (value: any) => {
                    console.log(value)
                    operateTags('Linux', value.key)
                    on_search()
                }
            }, {
                name: "public.Windows",
                key: "type",
                disposefun: (value: any) => {
                    operateTags('Windows', value.key)
                    on_search()
                }
            }
        ]
    }
]

const departmentState = reactive({
    data: [],
    fetching: false,
});
const searchDepartmentState = reactive({
    data: [],
    fetching: false,
});
let departmentOption = reactive<{ name: string }>({ name: "" })

let extraSearchModel = {
    departmentId: undefined
}
let departmentKey = ref<number>(1)
const departmentChange = debounce((value: string, option: any) => {
    searchInputValue.value = value;
    departmentOption = option
    onInputTag()
    extraSearchModel.departmentId = undefined
    departmentKey.value++
}, 500)


const extraSearchReset = () => {
    extraSearchModel.departmentId = undefined
    searchFun("", searchDepartmentState, listDepartment, { deep: 0, id: user.department_id });
}



onMounted(() => {
    initializeSearchTable(searchFronModel, columnsData, 'deviceColumnsStorage')
    searchFun("", searchDepartmentState, listDepartment, { deep: 0, id: user.department_id });
})

const accountOpen = ref<boolean>(false);
const deviceItem = reactive<{ deviceName: string, deviceId: number }>({ deviceName: "", deviceId: 0 })
const on_deviceAccount = (id: number, name: string) => {
    deviceItem.deviceId = id
    deviceItem.deviceName = name
    accountOpen.value = true
}
let deviceId: number | undefined = undefined
const onOperate = (record?: formStateType) => {
    modelOpen.value = true
    let departmentName = ""
    if (record) {
        departmentName = record.departmentName || ""
        for (const key in formState) formState[key] = record[key]

        deviceId = record.id
    }
    searchFun(departmentName, departmentState, listDepartment, { deep: 0, id: user.department_id });
}

const searchFun = debounce((value: string, State: any, api: Function, obj: any) => {
    State.data = [];
    State.fetching = true;
    api({ page: 1, pageSize: 10, name: value, ...obj }).then((res: any) => {
        let { data } = res.data
        State.data = data;
        State.fetching = false;
    })
}, 300);
const onFinish = () => {
    let paramFrom = { ...formState }
    let api = addDevice
    // let user = JSON.parse(localStorage.getItem("user") as string)
    if (deviceId) {
        api = updateDevice
        paramFrom.id = deviceId
    }
    api(paramFrom).then(() => {
        modelOpen.value = false
        requestList()
    })
};

const validateDeviceAddress = ({ }, value: string) => {

    if (value) {
        let ipReg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        // let urlReg = /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*$/
        if (!ipReg.test(value)) {
            return Promise.reject(`${t("public.pleaseInput")}${t("device.CorrectDeviceAddress")}`);
        }
    }
    return Promise.resolve();

}

</script>

<style lang="less" scoped>
::v-deep(.ant-dropdown-link) {
    width: 20px;
    min-width: 20px;
}
</style>