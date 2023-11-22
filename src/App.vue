<template>
  <ConfigProvider :locale="localeValue == 'en' ? en : zh" :theme="{
    token: {
      colorPrimary: store.state.globalConfiguration.colorPrimary,
    },
    algorithm: Fun_shiyan(),
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
import { ConfigProvider } from 'ant-design-vue';
import en from 'ant-design-vue/es/locale/en_US';
import zh from 'ant-design-vue/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs';
import { useStore } from 'vuex'
const { locale } = useI18n()
const { defaultAlgorithm, darkAlgorithm } = theme;
let localeValue = ref<string>(locale.value)
const store = useStore()
dayjs.locale(locale.value);
watch(locale, (val: string) => {
  localeValue.value = val
  dayjs.locale(val);
});

window.document.documentElement.setAttribute('data-theme', store.state.globalConfiguration.theme)
const Fun_shiyan = () => {
  switch (store.state.globalConfiguration.theme) {
    case "theme-light":
      return defaultAlgorithm
    case "theme-dark":
      return darkAlgorithm
  }
  // return defaultAlgorithm
}

</script>

<style lang="less">
// @primary-color: #f99; // 自定义的主题颜色
* {
  padding: 0;
  margin: 0;
}
</style>
