<template>
  <ConfigProvider :locale="localeValue == 'en' ? en : zh" :theme="{
    token: {
      colorPrimary: store.state.globalConfiguration.colorPrimary,
      colorLink: store.state.globalConfiguration.colorPrimary,
    },

    algorithm: Fun_algorithm()
  }">


<a-watermark v-bind="model">
    <router-view #="{ Component }">
      <component :is="Component" />
    </router-view>

  </a-watermark>
    <!-- <LockScreen /> -->
  </ConfigProvider>
</template>

<script setup lang="ts">
import { theme } from 'ant-design-vue';
import { watch, ref ,reactive} from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import en from 'ant-design-vue/es/locale/en_US';
import zh from 'ant-design-vue/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs';
import { useStore } from 'vuex'
const { locale } = useI18n()
const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;
let localeValue = ref<string>(locale.value)
const store = useStore()
dayjs.locale(locale.value);
watch(locale, (val: string) => {
  localeValue.value = val
  dayjs.locale(val);
});

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

</script>

<style lang="less">
// @primary-color: #f99; // 自定义的主题颜色
* {
  padding: 0;
  margin: 0;
}
</style>
