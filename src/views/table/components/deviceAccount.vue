<template>
    <div class="tablePage-style">
        <!-- <div class="table-nav">
            <a-form :model="searchFrom" ref="searchFormRef">
                <a-row :gutter="[20, 0]">
                    <a-col :lg="8" :md="12" :sm="24">
                        <a-form-item :label="t('device.deviceUsername')" name="username">
                            <a-input v-model:value="searchFrom.username"
                                :placeholder='`${t("public.pleaseInput")}${t("device.deviceUsername")}`' />
                        </a-form-item>
                    </a-col>
             

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
        </div> -->

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
                    <a-button v-has="'/user/delete'" type="primary" @click="handleDelete(tableState.selectedRowKeys)"
                        :disabled="tableState.selectedRowKeys.length === 0" danger>{{
                            t('public.deleteInBatches') }}</a-button>
                </a-space>
                <a-space>
                    <a-button v-has="'/user/create'" :icon="h(PlusOutlined)" @click="modelOpen = true" type="primary">{{
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

                    <template v-if="column.dataIndex === 'createdAt' || column.dataIndex === 'updatedAt'">
                        {{ dayjs(record[column.dataIndex]).format("YYYY-MM-DD HH:mm:ss") }}
                    </template>
                    <template v-if="column.dataIndex === 'operation'">
                        <a-space :size="8">
                            <a-button type="link" v-has="'/user/update'" @click="onRedact(record)">{{ t('public.redact')
                                }}</a-button>
                            <a-button type="link" v-has="'/user/delete'" danger @click="handleDelete([record.id])">{{
                            t('public.delete')
                        }}</a-button>
                        </a-space>
                    </template>
                </template>
                <template #emptyText v-if="!permsJudge('/account/list')">
                    <tabNoPermissin />
                </template>
            </a-table>
        </div>
        <a-modal v-model:open="modelOpen" :title="t('device.deviceAccount')" :footer="null"
            :after-close="() => { fromreset(submitFormRef); id = undefined }">
            <a-watermark v-bind="store.state.globalConfiguration.watermarkConfiguration">
                <a-form :model="formState" name="basic" :label-col="{ span: 4 }" :wrapper-col="{ span: 20 }"
                    ref="submitFormRef" autocomplete="off" @finish="onFinish">
                    <a-form-item :label="t('device.deviceUsername')" name="username"
                        :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.deviceUsername')}` }]">
                        <a-input v-model:value="formState.username"
                            :placeholder='`${t("public.pleaseInput")}${t("device.deviceUsername")}`' />
                    </a-form-item>
                    <a-form-item :label="t('device.Protocol')" name="protocol"
                        :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.Protocol')}` }]">
                        <a-input-number :min="1" :max="65535" v-model:value="formState.protocol" class="input-width100"
                            :placeholder='`${t("public.pleaseInput")}${t("device.Protocol")}`' />
                    </a-form-item>
                    <a-form-item :label="t('device.PrivateKey')" name="privateKey"
                        :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.PrivateKey')}` }]">
                        <a-input v-model:value="formState.privateKey"
                            :placeholder='`${t("public.pleaseInput")}${t("device.PrivateKey")}`' />
                    </a-form-item>
                    <a-form-item :label="t('device.Port')" name="port"
                        :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('device.Port')}` }]">
                        <a-input-number :min="1" v-model:value="formState.port" class="input-width100"
                            :placeholder='`${t("public.pleaseInput")}${t("device.Port")}`' />
                    </a-form-item>
                    <a-form-item :label="t('user.password')" name="password"
                        :rules="[{ required: true, message: `${t('public.pleaseInput')}${t('user.password')}` }]">
                        <a-input-password v-model:value="formState.password" autocomplete="off"
                            :placeholder='`${t("public.pleaseInput")}${t("user.password")}`' />
                    </a-form-item>
                    <div class="pop-button">
                        <a-button @click="() => { modelOpen = false }" class="search-button-right " tml-type="submit">
                            {{ t('public.cancel') }}
                        </a-button>
                        <a-button type="primary" html-type="submit">
                            {{ t('public.Submit') }}
                        </a-button>
                    </div>
                </a-form>
            </a-watermark>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { useTableHooks } from "@/hooks/useTableHooks"
import { ref, reactive, h, onMounted } from 'vue';
import { useI18n } from 'vue-i18n'
import tabNoPermissin from "@/components/public-dom/table-no-permission.vue"
import { accountCreate, accountList, accountDelete, accountUpdate } from "@/api/admin"
import { SearchOutlined, PlusOutlined, SyncOutlined, DownOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import dayjs from 'dayjs';
import { SearchFronModel, } from "@/common/type/type"
import { permsJudge } from "@/common/method/utils"
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps(['deviceId']);

let { paginationOpt, tableData, submitFormRef, tableState, tableLoading, onTableSelectChange, requestList, on_search, fromreset, handleDelete, searchInputValue, handleMenuClick, searchModelItem, searchTags, columnsCheckboxArray, tableColumns, initializeSearchTable, changeColumnsCheckbox, onInputTag } = useTableHooks({ listApi: accountList, deleteApi: accountDelete });
const { t } = useI18n()
const id = ref<number | undefined>(undefined);
type tableType = {
    id: number
} & formStateType

type formStateType = {
    deviceId: Number | undefined
    username: string
    protocol: Number
    privateKey: string
    port: Number
    password: string
}

const modelOpen = ref<boolean>(false);
const formState = reactive<formStateType>({
    deviceId: Number(props.deviceId),
    username: "",
    protocol: 0,
    privateKey: "",
    port: 0,
    password: ""
});

const columnsData = [{
    title: 'device.deviceUsername',
    dataIndex: 'username',
    noCancel: true
}, {
    title: 'device.Protocol',
    dataIndex: 'protocol',
}, {
    title: 'device.Port',
    dataIndex: 'port',
}, {
    title: 'device.PrivateKey',
    dataIndex: 'privateKey',
},
{
    title: 'public.UpdateDate',
    dataIndex: 'updatedAt',
},
{
    title: 'public.creationDate',
    dataIndex: 'createdAt',
},
{
    title: 'public.operation',
    dataIndex: 'operation',
}]

const searchFronModel: SearchFronModel[] = [
    {
        key: 'name',
        name: "device.deviceUsername"
    }
]
onMounted(() => {
    initializeSearchTable(searchFronModel, columnsData, 'deviceUserColumnsStorage')
})

const onRedact = (record: tableType) => {
    for (const key in formState) {
        if (record[key]) formState[key] = record[key]
    }
    id.value = record.id
    modelOpen.value = true
}
const onFinish = () => {
    let api = accountCreate
    let fromData: any = { ...formState }
    if (id.value !== undefined) {
        api = accountUpdate
        fromData.id = id.value
    }
    api(fromData).then(() => {
        modelOpen.value = false
        requestList()
        message.success(t('message.success'));
    })
};

</script>

<style lang="less" scoped></style>