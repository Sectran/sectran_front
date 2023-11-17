import { createStore } from 'vuex'
import tabsStore from "./tabsStore/index"
import globalConfiguration from "./globalConfiguration/index"

export default createStore({
    modules: {
        tabsStore,
        globalConfiguration
    }
})