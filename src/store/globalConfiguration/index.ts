//全局配置
type configurationStore = {
    colorPrimary: string | null
}

export default {
    namespaced: true,
    state: {
        colorPrimary: localStorage.getItem('colorPrimary') || "rgb(22, 119, 255)"
    },
    mutations: {
        alterColorPrimary(state: configurationStore, color: string) {
            state.colorPrimary = color
            localStorage.setItem('colorPrimary', color)
        },
    }

}