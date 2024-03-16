//全局配置
type configurationStore = {
    colorPrimary: string | null
    theme: string | null
    isCompact: boolean
}

export default {
    namespaced: true,
    state: {
        colorPrimary: localStorage.getItem('colorPrimary') || "rgb(22, 119, 255)",
        theme: localStorage.getItem('theme') || "theme-light",
        isCompact: false,
        watermarkConfiguration: {
            content: localStorage.getItem("name") || 'Sectran',
            font: {
                fontSize: 14,
            },
            zIndex: 11,
            rotate: -22,
            gap: [70, 70] as [number, number],
            offset: [],
        }
    },
    mutations: {
        alterColorPrimary(state: configurationStore, color: string) {
            state.colorPrimary = color
            localStorage.setItem('colorPrimary', color)
        },
        alterTheme(state: configurationStore) {
            state.theme = state.theme == 'theme-light' ? 'theme-dark' : 'theme-light'
            localStorage.setItem('theme', state.theme)
            window.document.documentElement.setAttribute('data-theme', state.theme)
        },
        compactMutations(state: configurationStore) {
            state.isCompact = !state.isCompact
        }

    }

}