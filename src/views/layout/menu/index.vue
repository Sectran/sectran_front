<template>
  <div class="menu-style">
    <div class="logo">

      <!-- <img :src="logo" alt="">

      <icon :style="{ color: 'hotpink' }">
        <template #component>
          <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
            <path
              d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
          </svg>
        </template>
      </icon> -->


      <!-- <MyIcon type="icon-dianzan" style="width: 200px;height: 100px;" /> -->

      <img :src="logo" style="color: red;" alt="">
      <template v-if="!collapsed">
        <div>Sectran</div>
      </template>
    </div>
    <a-menu v-model:selectedKeys="menuState.selectedKeys" v-model:openKeys="menuState.openKeys" mode="inline">
      <a-sub-menu v-for="item in administration" :key="item.name">
        <template #title>
          <span>
            <pie-chart-outlined />
            <span>{{ t(`menu.${item.meta.title}`) }}</span>
          </span>
        </template>
        <a-menu-item v-for="el in item.children" :key="el.name" @click="onPath(el)">{{ t(`menu.${el.meta.title}`)
        }}</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// createFromIconfontCN
import { PieChartOutlined,  } from '@ant-design/icons-vue';
import { useStore } from 'vuex'
import administration from "@/router/Layout/index"
import { routerType } from "@/utils/type/type"
import { useI18n } from 'vue-i18n'
// import logo from '@/assets/img/logo.png'
import logo from '@/assets/img/logo.svg'
// const MyIcon = createFromIconfontCN({
//   scriptUrl: logo
// });
defineProps<{
  collapsed: boolean,
}>()
const { t } = useI18n()
const router = useRouter();
const route = useRoute();
const store = useStore()
let tabs = {
  name: route.name,
  title: route.meta.title
}
store.commit('tabsStore/urlAlter', tabs)
const menuState = reactive<{ openKeys: string[], selectedKeys: string[] }>({
  openKeys: ['admin'],
  selectedKeys: [route.name],
})
watch(() => store.state.tabsStore.pitchTabs, (oldValue: string) => {
  menuState.selectedKeys = [oldValue]
})
const onPath = (el: routerType) => {
  let data = {
    name: el.name,
    title: el.meta.title
  }
  store.commit('tabsStore/urlAlter', data)
  router.push(data.name)
}

watch(
  () => router.currentRoute.value,
  (newValue: any) => {
    let { name, meta: { title } } = newValue
    store.commit('tabsStore/urlAlter', { name, title })
    // console.log('newValue', newValue)
  },
  { immediate: true }
)
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
  display: flex;
  align-items: center;
  font-size: 24px;
  color: #4C7BFC;
  font-weight: bold;

  img {
    width: 60px;
    height: auto;
  }

  div {
    margin-left: 5px;
  }
}
</style>