<template>
    <div class="tabs-style">
        <a-tabs v-model:activeKey="store.state.tabsStore.pitchTabs" hide-add type="editable-card" @tabClick="on_tabs"
            @edit="(value: string) => onTabsEdit(value, 3)">
            <a-tab-pane v-for="(pane, index) in store.state.tabsStore.tabsArr" :key="pane.name">
                <!-- :tab="t(`menu.${pane.title}`)" -->
                <template #tab>
                    <a-dropdown :trigger="['contextmenu']">
                        <!-- @contextmenu="rightClicked($event, index)" -->
                        <span>
                            {{ t(`menu.${pane.title}`) }}
                        </span>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item @click="onTabsEdit(pane.name, 3)">关闭</a-menu-item>
                                <a-menu-item v-if="index !== store.state.tabsStore.tabsArr.length - 1"
                                    @click="onTabsEdit(pane.key, 0)">关闭右边</a-menu-item>
                                <a-menu-item @click="onTabsEdit(pane.name, 1)">关闭其他</a-menu-item>
                                <a-menu-item @click="onTabsEdit(pane.name, 2)">全部关闭</a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </template>
            </a-tab-pane>
        </a-tabs>
        <!-- -->
    </div>
    <!-- <div :class="{ isShow: myMenuVisible }" class="myMenu">
        <ul>
            <li v-show="store.state.tabsStore.tabsArr.length !== 1" @click.stop="close('others')">关闭其他</li>
            <li v-show="rightClickIndex !== 0" @click.stop="close('left')">关闭左侧标签</li>
            <li v-show="rightClickIndex !== store.state.tabsStore.tabsArr.length - 1" @click.stop="close('right')">
                关闭右侧标签
            </li>
            <li @click.stop="close('all')">全部关闭</li>
        </ul>
    </div> -->

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
 * 
 * @param name 当前操作的key
 * @param type 关闭类型 0关闭右边 1关闭其他 2关闭全部 3关闭当前
 */
const onTabsEdit = (name: string, type: number) => {
    console.log(name)
    console.log(type)
    store.commit('tabsStore/deleteTabsArr', { targetKey: name, type: type })
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

//这里用到less处理，没下载的要先下载一下
.myMenu {
    position: absolute;
    top: 0;
    left: 0;
    // width: 150px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 10px;
    box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    display: none;
    z-index: 999;

    >ul {
        list-style: none;
        font-size: 14px;
        color: #666;

        li {
            font-size: 13px;
            padding: 5px;
            margin: 3px;
        }

        >li:hover {
            background-color: #eee;
            cursor: pointer;
        }
    }
}

.isShow {
    display: block;
}
</style>