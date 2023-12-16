<template>
  <a-layout class="layout-style">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible class="a-sider">
      <AsideMenu></AsideMenu>
    </a-layout-sider>
    <a-layout>
      <Headers v-model:collapsed="collapsed"></Headers>
      <Tabs></Tabs>
      <a-watermark v-bind="model">

        <a-layout-content class="content-style ">
          <router-view v-slot="{ Component }">
            <template v-if="Component">
              <transition :name="Object.is(route.meta?.transitionName, false) ? '' : 'fade-transform'" mode="out-in"
                appear>
                <keep-alive :include="[store.state.tabsStore.tabsArr.map((item: any) => item.name)]">

                  <component :is="Component" :key="route.fullPath" />


                </keep-alive>
              </transition>
            </template>
          </router-view>
        </a-layout-content>
      </a-watermark>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref, onMounted ,reactive} from "vue";
import AsideMenu from './menu/index.vue';
import Headers from './header/index.vue';
import Tabs from './tabs/index.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex'
const route = useRoute();
const collapsed = ref<boolean>(false);
const store = useStore()


const model = reactive({
  content: 'Sectran',
  font: {
    fontSize: 14,
  },
  zIndex: 11,
  rotate: -22,
  gap: [70, 70] as [number, number],
  offset: [],
});
onMounted(() => {
  console.log('3.-组件挂载到页面之后执行-------onMounted,index')
})
</script>

<style lang="less" scoped>


@import "@/assets/css/transition.less";

.layout-style {
  width: 100vw;
  height: 100vh;
}

.content-style {
  height: calc(100vh - 64px - 50px);
  padding: 20px;
  background: var(--theme-content-bg);
}
</style>
