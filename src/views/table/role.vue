<template>
    <div class="tablePage-style">



        <div class="table-nav">
            <a-form layout="inline" :model="searchFrom" ref="searchFormRef">
                <a-row :gutter="[20, 16]">
                    <!-- <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('department.departmentId')">
                            <a-input v-model:value="searchFrom.dept_id"
                                :placeholder="t('department.departmentIdPlaceholder')" />
                        </a-form-item>
                    </a-col> -->
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('role.roleName')" name="name">
                            <a-input v-model:value="searchFrom.name" allowClear
                                :placeholder="t('role.roleName')" />
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
        </div>

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
            :row-selection="{ selectedRowKeys: tableState.selectedRowKeys, onChange: onTableSelectChange }">
            <template #headerCell="{ column }">
                <span>{{ t(column.title) }}</span>
            </template>
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space :size="8">
                        <a-button type="link" @click="onRedact(record)">{{ t('public.redact') }}</a-button>
                        <a-button type="link" danger>{{ t('public.delete') }}</a-button>
                    </a-space>
                </template>
                <template v-if="column.dataIndex === 'createdAt' || column.dataIndex === 'updatedAt'">
                    {{ dayjs(record[column.dataIndex]).format("YYYY-MM-DD HH:mm:ss") }}
                </template>
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
                    <a-input v-model:value="formState.weight" />
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
                    <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </a-modal>

        <div class="tablePage-style">
        <a-tabs v-model:activeKey="activeKey" @change="tabChange">
            <a-tab-pane v-for="(item, index) in roleList" :key="index">
                <template #tab>
                    <span>
                        {{ item.name }}
                    </span>
                </template>
            </a-tab-pane>
            <template #rightExtra>
                <a-button @click="addOpen = true" type="primary">{{ t('public.add') }}</a-button>
            </template>
        </a-tabs>
        <div class="flex-space-between-center">
            <a-input :style="{ visibility: ifRedact ? 'visible' : 'hidden' }" style="width: 300px;"
                v-model:value="roleName" placeholder="请输入角色名称" />
            <a-button v-if="ifRedact" @click="ifRedact = false" type="link">{{ t('public.Submit') }}</a-button>
            <a-button v-else @click="ifRedact = true" type="link">{{ t('public.redact') }}</a-button>
        </div>
        <div v-for="(item, index) in roleLimitsList" :key="index">
            <a-divider />
            <a-checkbox v-model:checked="item.checkAll" :indeterminate="item.indeterminate" :disabled='!ifRedact'
                @change="(e: CheckAll) => onCheckAllChange(e, item)">
                <span :style="{ color: ifPitch('one', item.checkedList, item.name) }">{{ item.name }}</span>
            </a-checkbox>
            <a-checkbox-group class="checkbox-son" v-model:value="item.checkedList" :disabled='!ifRedact'
                @change="(e: any) => change_sonMenu(e, item)" :options="item.plainOptions">
                <template #label="{ label }">
                    <span :style="{ color: ifPitch('two', item.checkedList, label) }">{{ label }}</span>
                </template>
            </a-checkbox-group>
        </div>
    </div>
    </div>



</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { ref, reactive, h } from 'vue';
import { useTableHooks } from "@/hooks/useTableHooks"
import { listRole, addRole, editRole, deleteRole } from "@/api/admin"
import { SearchOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import dayjs from 'dayjs';
type SearchType = {
    name:string
};
let searchFrom = reactive<SearchType>({
    name: ""
});

let { tabHeight, paginationOpt, tableData, searchFormRef, tableState, submitFormRef, requestList, on_search, fromreset, handleDelete, onTableSelectChange } = useTableHooks<SearchType>(searchFrom, { listApi: listRole, deleteApi: deleteRole });

const { t } = useI18n()
const store = useStore()

type RoleCheckbox = {
    indeterminate: boolean,
    checkAll: boolean,
    name: string,
    checkedList: string[],
    plainOptions: string[]
}
type CheckAll = {
    target: { checked: boolean }
}
type FormState = {
    name: string
    weight: number
}
interface TableItem extends FormState {
    key: number;
    id: number

}

const columns = [
    {
        title: 'role.roleName',
        dataIndex: 'name',
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

const activeKey = ref(0);
const roleName = ref('管理员')
const ifRedact = ref<boolean>(false)
const roleList = ref<{ name: string, children: string[], redactState: boolean }[]>([
    { name: "管理员", children: ['人员管理', '部门管理', '角色管理'], redactState: true },
    { name: "操作员", children: ['人员管理'], redactState: true },
])
const roleLimitsList = ref<RoleCheckbox[]>([{
    indeterminate: true,
    checkAll: false,
    name: "配置管理",
    checkedList: ['人员管理', '部门管理'],
    plainOptions: ['人员管理', '部门管理', '角色管理']
}])
const addOpen = ref<boolean>(false);
const formState = reactive<FormState>({
    name: "",
    weight: 0
});
const id = ref<number | undefined>(undefined);

const onCheckAllChange = (e: CheckAll, item: RoleCheckbox) => {
    console.log()
    Object.assign(item, {
        checkedList: e.target.checked ? item.plainOptions : [],
        indeterminate: false,
    });
};
const change_sonMenu = (e: any, item: RoleCheckbox) => {
    item.indeterminate = e.length !== 0 && e.length < item.plainOptions.length
    item.checkAll = e.length == item.plainOptions.length
}
/**
 * 设置字体颜色
 * @param tier 当前层级
 * @param checkedList 选中的数组
 * @param label 当前数据
 * @return  字体颜色
 */
const ifPitch = (tier: string, checkedList: string[], label: string): string | undefined => {
    if (ifRedact.value) return "#333333"
    if (tier === 'one') {
        return checkedList.length !== 0 ? store.state.globalConfiguration.colorPrimary : 'rgba(0, 0, 0, 0.25)'
    } else if (tier === 'two') {
        return checkedList.includes(label) ? store.state.globalConfiguration.colorPrimary : 'rgba(0, 0, 0, 0.25)'
    }
}
/**
 * 切换tab
 * @param e tab下标
 */
const tabChange = (e: number) => {
    roleName.value = roleList.value[e].name
    roleLimitsList.value[0].checkedList = roleList.value[e].children
}

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


</script>

<style lang="less" scoped>
.checkbox-son {
    width: 100%;
    margin-top: 10px;
}
</style>