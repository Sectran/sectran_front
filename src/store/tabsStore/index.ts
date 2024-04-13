
//tabs的处理
type tabsArrType = {
    tabsArr: tabsType[],
    pitchTabs: string
}
type tabsType = {
    title: string,
    name: string,
}
import store from "@/store"
import router from "@/router"
export default {
    namespaced: true,
    state: {
        //tabs数组
        tabsArr: [],
        pitchTabs: ''
    },
    mutations: {
        /**
         * 修改url
         * @param state 数据源
         * @param data 添加的tabs信息
         */
        urlAlter(state: tabsArrType, data: tabsType) {
            if (!state.tabsArr.some(item => item.name === data.name)) {
                state.tabsArr.push(data)
            }
            state.pitchTabs = data.name
        },
        /**
         * 跳转tabs
         * @param state 数据源 
         * @param name 路由信息
         */
        pitchTabsChange(state: tabsArrType, name: string) {
            state.pitchTabs = name
        },
        /**
         * 删除tabs
         * @param state 
         * @param name 当前删除的name
         * @param routeName 当前路由的name
         */
        deleteTabsArr(state: tabsArrType, nameObj: { name: string, routeName: string }) {
            let { name, routeName } = nameObj
            state.tabsArr.splice(state.tabsArr.findIndex(item => item.name === nameObj.name), 1)
            store.commit('tabsStore/isDeleteAtPresenttabs', { name, routeName })
        },
        /**
         * 点击右键菜单
         * @param state 
         * @param clickType 点击菜单类型
         * @param rightClickIndex 右键菜单点击的index
         */
        onRightClick(state: tabsArrType, dataObj: { clickType: string, rightClickIndex: number, routeName: string }) {
            let { clickType, rightClickIndex, routeName } = dataObj
            let deletetabs: tabsType[]
            switch (clickType) {
                case 'left':
                    deletetabs = state.tabsArr.splice(rightClickIndex - 1, 1)
                    console.log(deletetabs);
                    break;
                case 'right':
                    deletetabs = state.tabsArr.splice(rightClickIndex + 1, 1)
                    store.commit('tabsStore/isDeleteAtPresenttabs', { name: deletetabs[0].name, routeName })
                    break;
                case 'all':
                    state.tabsArr = []
                    break;
                case 'others':
                    state.tabsArr = state.tabsArr.splice(rightClickIndex, 1)
                    break;
            }
        },
        /**
         * 删除tabs后判断删除的是否当前页面
         * @param state 
         * @param name 当前删除的name
         * @param routeName 当前路由的name
         */
        isDeleteAtPresenttabs(state: tabsArrType, nameObj: { name: string, routeName: string }) {
            if (nameObj.name === nameObj.routeName) {
                let routerPushName = state.tabsArr[state.tabsArr.length - 1].name
                console.log(routerPushName);
                router.push(routerPushName)
                state.pitchTabs = routerPushName
            }
        }
    }
}