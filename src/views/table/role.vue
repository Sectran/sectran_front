<template>
    <div class="tablePage-style">
        <a-tabs v-model:activeKey="activeKey" @change="tabChange">
            <a-tab-pane v-for="(item, index) in roleList" :key="index">
                <template #tab>
                    <span>
                        <!-- <a-badge :dot="true"> -->
                        {{ item.name }}
                        <!-- </a-badge> -->
                    </span>
                </template>
            </a-tab-pane>
            <template #rightExtra>
                <a-button @click="add_role" type="primary">{{ t('public.add') }}</a-button>
            </template>
        </a-tabs>
        <div class="flex-space-between-center">
            <a-input :style="{ visibility: ifRedact ? 'visible' : 'hidden' }" style="width: 300px;" v-model:value="roleName"
                placeholder="请输入角色名称" />
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
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { ref } from 'vue';
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


const add_role = () => {
    // roleList.value.push({name:"",})
    // add_role
}

</script>

<style lang="less" scoped>
.checkbox-son {
    width: 100%;
    margin-top: 10px;
}
</style>