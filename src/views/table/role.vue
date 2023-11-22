<template>
    <div class="tablePage-style">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="管理员"></a-tab-pane>
        </a-tabs>

        <!-- <a-divider /> -->
        <div>
            <a-checkbox v-model:checked="state.checkAll" :indeterminate="state.indeterminate" @change="onCheckAllChange">
                {{ state.name }}
            </a-checkbox>
        </div>

        <a-checkbox-group class="checkbox-son" v-model:value="state.checkedList"
            @change="(e: any) => change_sonMenu(e, state)" :options="state.plainOptions" />
    </div>
</template>

<script setup lang="ts">
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()
import { ref, reactive } from 'vue';
const activeKey = ref('1');

const state = reactive({
    indeterminate: false,
    checkAll: false,
    name: "配置管理",
    checkedList: [],
    plainOptions: ['人员管理', '部门管理', '角色管理']
});
const onCheckAllChange = (e: any) => {
    console.log(e)
    Object.assign(state, {
        checkedList: e.target.checked ? state.plainOptions : [],
        indeterminate: false,
    });
};

const change_sonMenu = (e: any, state: any) => {
    state.indeterminate = e.length !== 0 && e.length < state.plainOptions.length
    state.checkAll = e.length == state.plainOptions.length
}

</script>

<style lang="less" scoped>
.checkbox-son {
    width: 100%;
    margin-top: 10px;
}
</style>