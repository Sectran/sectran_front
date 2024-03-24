import { createStore } from 'vuex'
import tabsStore from "./tabsStore/index"
import globalConfiguration from "./globalConfiguration/index"
import router from "./router/index"
export default createStore({
    modules: {
        tabsStore,
        globalConfiguration,
        router
    }
})