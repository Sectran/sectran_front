//对路由表的处理
import { Router } from "@/common/type/type"
interface stateinterface {
    if_routeMenu: Boolean,
    menuData:Router[]
}
export default {
    namespaced: true,
    state: {
        //是否重新渲染路由表
        if_routeMenu: true, 
        menuData:[],
    },
    mutations: {
        routeUpdate(state: stateinterface) {
            state.if_routeMenu = false
        },
        amendMenuData(state:stateinterface,data:Router[]) {
            state.menuData = data
        }
    }

}