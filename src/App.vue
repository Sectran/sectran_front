<template>
  <ConfigProvider :locale="localeValue == 'en' ? en : zh" :theme="{
    token: {
      colorPrimary: store.state.globalConfiguration.colorPrimary,
      colorLink: store.state.globalConfiguration.colorPrimary,
    },
    algorithm: Fun_algorithm()
  }">
    <router-view #="{ Component }">
      <component :is="Component" />
    </router-view>
    <!-- <LockScreen /> -->
  </ConfigProvider>
</template>

<script setup lang="ts">
import { theme } from 'ant-design-vue';
import { watch, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ConfigProvider } from 'ant-design-vue';
import en from 'ant-design-vue/es/locale/en_US';
import zh from 'ant-design-vue/es/locale/zh_CN';
import layout from "@/router/layout/index"
import 'dayjs/locale/zh-cn';
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs';
import { useStore } from 'vuex'
import { Router } from "@/utils/type/type"
const { locale } = useI18n()
const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;
let localeValue = ref<string>(locale.value)
const store = useStore()
const router = useRouter();
dayjs.locale(locale.value);
watch(locale, (val: string) => {
  localeValue.value = val
  dayjs.locale(val);
});

window.document.documentElement.setAttribute('data-theme', store.state.globalConfiguration.theme)
const Fun_algorithm = () => {
  let algorithm = []
  if (store.state.globalConfiguration.theme === 'theme-light') {
    algorithm.push(defaultAlgorithm)
  } else if (store.state.globalConfiguration.theme === 'theme-dark') {
    algorithm.push(darkAlgorithm)
  }
  if (store.state.globalConfiguration.isCompact) algorithm.push(compactAlgorithm)
  return algorithm
}

router.beforeEach((to: { path: string }, { }: {}, next: Function) => {
  const token: string | null = localStorage.getItem("token");
  if (!token && to.path !== "/") {
    return next({ path: "/" })
  }
  if (store.state.router.menuData.length === 0) {
    let menu = recursionMenu(layout)
    // let menu = layout
    menu.forEach((item: Router) => {
      router.addRoute(item)
    })
    store.commit('router/amendMenuData', menu)
    return next({ ...to, replace: true })
  } else {
    next()
  }
})

//acquire menu
const recursionMenu = (data: Router[]) => {
  const limitsData: string | null = JSON.parse(localStorage.getItem("limitsData") as string);
  let routerData: Router[] = []
  data.forEach((item: Router) => {
    if (item.children && item.children.length !== 0) {
      let temp = recursionMenu(item.children)
      item.children = temp
      routerData.push(item)
    }

    if (item.meta.limits && limitsData?.includes(item.meta.limits)) {
      routerData.push(item)
    }
  })
  return routerData
}


</script>

<style lang="less">
// @primary-color: #f99; // 自定义的主题颜色
* {
  padding: 0;
  margin: 0;
}
</style>
