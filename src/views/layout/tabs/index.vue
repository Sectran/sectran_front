<template>
    <div class="tabs-style">
        <a-tabs v-model:activeKey="store.state.tabsStore.pitchTabs" hide-add type="editable-card" @tabClick="on_tabs"
            @edit="on_edit">
            <a-tab-pane v-for="pane in store.state.tabsStore.tabsArr" :key="pane.name" :tab="t(`menu.${pane.title}`)"></a-tab-pane>
        </a-tabs>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const store = useStore()
const route = useRoute();
const router = useRouter();
/**
 * 点击tabs
 * @param key key值
 */
const on_tabs = (key: string) => {
    if (route.name === key) return
    router.push(key)
    store.commit('tabsStore/pitchTabsChange', key)
}
/**
 * 删除tabs页
 * @param key  key值
 */
const on_edit = (key: string) => {
    console.log(route.name)
    store.commit('tabsStore/deleteTabsArr', { name: key, routeName: route.name })
}
</script>

<style lang="less" scoped>
.tabs-style {
    background: var(--theme-bg);
    padding: 10px 10px 0 10px;

    ::v-deep(.ant-tabs-nav) {
        margin: 0 !important;
    }
}
</style>