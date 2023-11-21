import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/css/style.less"
import "@/assets/css/theme.less"
import router from './router'
import store from './store'
import i18n  from "./locals"

createApp(App).use(router).use(i18n).use(store).mount('#app')
