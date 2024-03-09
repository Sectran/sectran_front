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
                        <a-form-item :label="t('department.departmentName')" name="name">
                            <a-input v-model:value="searchFrom.name" allowClear
                                :placeholder="t('department.departmentNamePlaceholder')" />
                        </a-form-item>
                    </a-col>
                    <a-col :xl="6" :md="8" :xs="12">
                        <a-form-item :label="t('department.departmentLocation')">
                            <a-input v-model:value="searchFrom.area" allowClear
                                :placeholder="t('department.departmentLocationPlaceholder')" />
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

        <a-space class="mb8 justify-end">
            <a-button :icon="h(PlusOutlined)" @click="addOpen = true" type="primary">{{ t('public.add') }}</a-button>
        </a-space>

        <a-table class="table-style" :scroll="{ y: tabHeight }" :columns="columns" :data-source="tableData"
            :indentSize="10" :pagination="paginationOpt">
            <template #headerCell="{ column }">
                <span>{{ t(column.title) }}</span>
            </template>
            <template #bodyCell="{ column, record }">
                <template v-if="column.dataIndex === 'operation'">
                    <a-space :size="8">
                        <a-button type="link" @click="onRedactDepartment(record)">{{ t('public.redact') }}</a-button>
                        <a-button type="link" @click="onAddSubordinateDepartment(record)">
                            {{ t('department.addSubordinateDepartment') }}
                        </a-button>
                        <a-button type="link" danger>{{ t('public.delete') }}</a-button>
                    </a-space>
                </template>
            </template>
        </a-table>

        <a-modal v-model:open="addOpen" title="添加部门" :footer='null'
            :after-close="() => { fromreset(submitFormRef); id = undefined }">
            <a-form :model="formState" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }"
                ref="submitFormRef" autocomplete="off" @finish="onFinish">
                <a-form-item label="部门名称" name="name"
                    :rules="[{ required: true, message: 'Please input your username!' }]">
                    <a-input v-model:value="formState.name" />
                </a-form-item>
                <a-form-item label="部门描述" name="description"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input v-model:value="formState.description" />
                </a-form-item>
                <a-form-item label="部门位置" name="area"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input v-model:value="formState.area" />
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 6, span: 16 }">
                    <a-button type="primary" html-type="submit">{{ t('public.Submit') }}</a-button>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>


<script setup lang="ts">
import { useTableHooks } from "@/hooks/useTableHooks"
import { onMounted, ref, reactive, h } from 'vue';
import { listDepartment, addDepartment, editDepartment, deleteDepartment } from "@/api/admin"
import { useI18n } from 'vue-i18n'
import { SearchOutlined, SyncOutlined, PlusOutlined } from '@ant-design/icons-vue';
type SearchType = {
    area: string;
    name: string,
};
interface FormState {
    id?: number
    area: string,
    description: string,
    name: string,
    parentDepartments: number | string,
}

interface DataItem extends FormState {
    key: number;
    children?: DataItem[];
}

let searchFrom = reactive({
    area: "",
    name: ""
});
let { tabHeight, paginationOpt, tableData, searchFormRef, submitFormRef, requestList, on_search, fromreset, handleDelete } = useTableHooks<SearchType>(searchFrom, { listApi: listDepartment, deleteApi: deleteDepartment });
const { t } = useI18n()
const addOpen = ref<boolean>(false);
const id = ref<number | undefined>(undefined);

const columns = [
    {
        title: 'department.departmentId',
        dataIndex: 'id',
    },
    {
        title: 'department.departmentName',
        dataIndex: 'name',
    },
    {
        title: 'department.departmentDescribe',
        dataIndex: 'description',
    },
    {
        title: 'department.departmentLocation',
        dataIndex: 'area',
    },

    {
        title: 'department.superiorDepartment',
        dataIndex: 'parentDepartments',
    },
    {
        title: 'public.creationTime',
        dataIndex: 'updatedAt',
    },
    {
        title: 'public.operation',
        fixed: 'right',
        dataIndex: 'operation',
        width: 300,
    }
]

const formState = reactive<FormState>({
    area: '',
    description: "",
    name: "",
    parentDepartments: "",
});

const onRedactDepartment = (record: DataItem) => {
    for (const key in formState) formState[key] = record[key]
    id.value = record.id
    addOpen.value = true
}

const onAddSubordinateDepartment = (record: { parentDepartments: string, id: string }) => {
    formState.parentDepartments = record.parentDepartments ? record.parentDepartments + `,${record.id}` : record.id + '';
    addOpen.value = true
}

const onFinish = () => {
    let api
    let fromData: any = { ...formState }
    if (id.value !== undefined) {
        api = editDepartment
        fromData.id = id.value
    } else {
        api = addDepartment
    }
    api(fromData).then(() => {
        addOpen.value = false
        requestList()
    })
};

</script>

<style lang="less" scoped></style>