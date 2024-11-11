<template>
    <div class="tabs-style">
        <a-tabs v-model:activeKey="store.state.tabsStore.pitchTabs" hide-add type="editable-card" @tabClick="on_tabs"
            @edit="on_edit">
            <a-tab-pane v-for="(pane, index) in store.state.tabsStore.tabsArr" :key="pane.name">
                <!-- :tab="t(`menu.${pane.title}`)" -->
                <template #tab>
                    <span @contextmenu="rightClicked($event, index)">
                        {{ t(`menu.${pane.title}`) }}
                    </span>
                </template>
            </a-tab-pane>

        </a-tabs>
        <!-- -->
    </div>
    <div :class="{ isShow: myMenuVisible }" class="myMenu">
        <ul>
            <li v-show="store.state.tabsStore.tabsArr.length !== 1" @click.stop="close('others')">关闭其他</li>
            <li v-show="rightClickIndex !== 0" @click.stop="close('left')">关闭左侧标签</li>
            <li v-show="rightClickIndex !== store.state.tabsStore.tabsArr.length - 1" @click.stop="close('right')">关闭右侧标签
            </li>
            <li @click.stop="close('all')">全部关闭</li>
        </ul>
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
import { ref } from "vue"
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


//右键菜单
const rightClickIndex = ref<number>(0);
let myMenuVisible = ref<boolean>(false); //表示是否显示右键的菜单栏
const rightClicked = (e: any, index: number) => {
    rightClickIndex.value = index
    e.preventDefault();
    myMenuVisible.value = true;
    let myMenu: any = document.querySelector(".myMenu");
    myMenu.style.top = `${e.clientY}px`;
    myMenu.style.left = `${e.clientX}px`;
};
document.addEventListener("click", () => {
    myMenuVisible.value = false;
});
//点了自定义菜单的操作
const close = (clickType: string) => {
    console.log(rightClickIndex.value)
    store.commit('tabsStore/onRightClick', { clickType, rightClickIndex: rightClickIndex.value,routeName:route.name })
    myMenuVisible.value = false;
};

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