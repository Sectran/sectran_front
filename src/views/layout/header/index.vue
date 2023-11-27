<template>
    <a-layout-header class="flex-space-between-center header-style">
        <div class="header-letf">
            <menu-unfold-outlined v-if="collapsed" class="nav-icon" @click="on_icon(false)" />
            <menu-fold-outlined v-else class="nav-icon" @click="on_icon(true)" />
            <!-- <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb> -->
        </div>
        <div class="nav-right">

            <LaptopOutlined @click="on_terminal" />


            <BulbOutlined @click="on_theme" :style="{ color: store.state.globalConfiguration.colorPrimary }"
                class="nav-icon" />
            <a-dropdown>

                <a class="nav-right-space" @click.prevent>
                    <TranslationOutlined :style="{ color: store.state.globalConfiguration.colorPrimary }"
                        class="nav-icon" />
                </a>
                <template #overlay>
                    <a-menu>
                        <a-menu-item :class="{ optCalss: langSrt === item.lang }" v-for="item in languageArr"
                            :key="item.lang" @click='on_language(item.lang)'>
                            {{ item.name }}
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
            <a-dropdown>
                <a class="nav-right-space" @click.prevent>
                    <div class="theme-color-div"
                        :style="{ 'background-color': store.state.globalConfiguration.colorPrimary }"></div>
                </a>
                <template #overlay>
                    <a-menu>
                        <!-- :class="{ optCalss: langSrt === item.lang }"  -->
                        <!--  -->
                        <a-menu-item v-for="item in themeColors" :key="item.color" @click='on_color(item)'>
                            <div class="theme-color">
                                <div class="theme-color-div" :style="{ 'background-color': item.color }"></div>
                                {{ item.name }}
                            </div>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>

            <!-- <a-avatar shape="square" class="nav-right-space">
                <template #icon>
                    <UserOutlined class="nav-icon" />
                </template>
            </a-avatar> -->
        </div>
    </a-layout-header>
</template> 

<script setup lang="ts">
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    TranslationOutlined,
    BulbOutlined,
    LaptopOutlined
    // UserOutlined
} from "@ant-design/icons-vue";
// Breadcrumb
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
const { locale } = useI18n()
const store = useStore()
const router = useRouter();
let langSrt = ref(localStorage.getItem('lang') || 'zh')
type languageType = {
    name: string,
    lang: string
}

type themeColorsType = {
    color: string,
    name: string,
}
let languageArr: languageType[] = [
    {
        name: '中文',
        lang: 'zh'
    },
    {
        name: 'English',
        lang: 'en'
    }
]

let themeColors: themeColorsType[] = [
    {
        name: "拂晓蓝",
        color: "rgb(22, 119, 255)"
    }, {
        name: "薄暮",
        color: "rgb(245, 34, 45)"
    }, {
        name: "火山",
        color: "rgb(250, 84, 28)"
    }, {
        name: "日暮",
        color: "rgb(250, 173, 20)"
    }, {
        name: "明青",
        color: "rgb(19, 194, 194)"
    }, {
        name: "极光绿",
        color: "rgb(82, 196, 26)"
    }, {
        name: "极客蓝",
        color: "rgb(47, 84, 235)"
    },
    {
        name: "酱紫",
        color: "rgb(114, 46, 209)"
    }
]


onMounted(() => {
    console.log('3.-组件挂载到页面之后执行-------onMounted,header')
})
/**
 * 点击切换全局化语言
 * @param value 
 */
const on_language = (lang: string) => {
    langSrt.value = lang
    locale.value = lang
    localStorage.setItem('lang', lang)
}
const { collapsed } = defineProps(['collapsed'])
const emit = defineEmits(['update:collapsed'])
const on_icon = (type: boolean) => {
    emit("update:collapsed", type)
}
const on_color = (item: themeColorsType) => {
    store.commit('globalConfiguration/alterColorPrimary', item.color)
}

const on_theme = () => {
    store.commit('globalConfiguration/alterTheme')
}
const on_terminal = () => {

    const url = router.resolve({
        path: '/terminal',
    });
    window.open(url.href);
    // router.replace('/admin/user',)
}
</script>

<style scoped lang="less">
.header-style {
    background: var(--theme-bg);
    padding: 0 20px;
    border-bottom: 2px solid var(--theme-border-color);

    .header-letf {
        display: flex;
    }
}

.nav-right {
    display: flex;
    align-items: center;

    a {
        display: flex;
    }

    .nav-right-space {
        margin-left: 30px;
    }


}

.theme-color {
    display: flex;
    align-items: center;
}

.theme-color-div {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
</style>