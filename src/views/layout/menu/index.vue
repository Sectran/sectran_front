<template>
  <div class="menu-style">
    <div class="logo">
      <logo-icon />
      <template v-if="!collapsed">
        <div :style="{ color: store.state.globalConfiguration.colorPrimary }">Sectran</div>
      </template>
    </div>
    <a-menu v-model:selectedKeys="menuState.selectedKeys" v-model:openKeys="menuState.openKeys" mode="inline">
      <a-sub-menu v-for="item in store.state.router.menuData" :key="item.name">
        <template #title>
          <span>
            <pie-chart-outlined />
            <span>{{ t(`menu.${item.meta.title}`) }}</span>
          </span>
        </template>
        <template v-for="el in item.children" :key="el.name">
          <a-menu-item v-if="el.meta.ismenu" :key="el.name"  @click="onPath(el)">
            {{ t(`menu.${el.meta.title}`) }}
          </a-menu-item>
        </template>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
// createFromIconfontCN
import { PieChartOutlined, } from '@ant-design/icons-vue';
import logoIcon from "@/components/icon/logoIcon.vue"
import { useStore } from 'vuex'
import { routerType } from "@/common/type/type"
import { useI18n } from 'vue-i18n'
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
.shiyan {
  ::v-deep(svg) {
    fill: blue;
  }


}

.logo {
  height: 32px;
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