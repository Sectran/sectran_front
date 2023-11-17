//全局配置
type configurationStore = {
    colorPrimary:string
}

export default {
    namespaced: true,
    state: {
        colorPrimary: "rgb(22, 119, 255)"
    },
    mutations: {
        alterColorPrimary(state: configurationStore, color: string) {
            state.colorPrimary = color
        },
    }

}