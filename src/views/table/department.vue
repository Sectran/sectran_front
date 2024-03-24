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
                    <!-- <a-col :xl="6" :md="8" :xs="12">
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
                    </a-col> -->
                    <!-- <a-col :xl="6" :md="8" :xs="12">
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
                    </a-col> -->
                </a-row>

            </a-form>
        </div>
        <a-space class="mb8 justify-end">
            <a-button :icon="h(PlusOutlined)" @click="console.log(value)" type="primary">{{ t('public.add')
                }}</a-button>
        </a-space>

  


        <nested-table :superiorId="1" :ifshowHeader="true" />
    </div>
</template>


<script setup lang="ts">
import { ref, reactive, h } from 'vue';
import { useI18n } from 'vue-i18n';
import { PlusOutlined } from '@ant-design/icons-vue';
import nestedTable from "@/components/nested-table/nested-table.vue"


type SearchType = {
    id: number
    area: string[]
    name: string
};


let searchFrom = reactive<SearchType>({
    id: 1,
    area: [],
    name: ""
});
const { t } = useI18n()
const value = ref<string[]>([]);

// const columns = [
//     {
//         title: 'department.departmentId',
//         dataIndex: 'id',
//     },
//     {
//         title: 'department.departmentName',
//         dataIndex: 'name',
//     },
//     {
//         title: 'department.departmentDescribe',
//         dataIndex: 'description',
//     },
//     {
//         title: 'department.departmentLocation',
//         dataIndex: 'area',
//     },

//     {
//         title: 'department.superiorDepartment',
//         dataIndex: 'parentDepartments',
//     },
//     {
//         title: 'public.creationTime',
//         dataIndex: 'updatedAt',
//     },
//     {
//         title: 'public.operation',
//         fixed: 'right',
//         dataIndex: 'operation',
//         width: 300,
//     }
// ]
</script>

<style lang="less" scoped></style>