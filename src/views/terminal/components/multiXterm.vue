<template>
    <div class="xtermList-style">
        <div v-for="item in multiData" :key="item.firstKey" class="layerTwo-style">
            <div v-for="el in item.secondList" :key="el.secondKey" class="threeLayers-style">
                <a-tabs v-for="(i, index) in el.list" :key="i.MultiKey" v-model:activeKey="i.MultiKey" hide-add
                    type="editable-card" :forceRender="true" @edit="(e: number) => onTabsEdit(e, i)">
                    <a-tab-pane v-for="e in i.multiList" :key="e.key" :tab="e.name" :closable="true">
                        <!-- @connectResult="connectResult" :submitLoading="submitLoading" -->
                        <!-- <xterm :username="props.username" :password="props.password">
                </xterm> -->
                        1321
                    </a-tab-pane>
                    <template #rightExtra>
                        <div class="xterm-icon">
                            <PlusSquareOutlined @click="on_addXterm(i)" />
                            <ColumnWidthOutlined @click="on_SplitScreen('right', el, index)" />
                            <ColumnHeightOutlined @click="on_SplitScreen('below', el, index)" />
                        </div>
                    </template>
                </a-tabs>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
// import xterm from "./xterm.vue"
import {
    PlusSquareOutlined,
    ColumnWidthOutlined,
    ColumnHeightOutlined,
} from '@ant-design/icons-vue';
import {
    onMounted,
    ref,
    // reactive,
    createVNode
} from "vue";
import { Modal } from 'ant-design-vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
type MultiList = {
    firstKey: number
    secondList: SecondList[]
}
type SecondList = {
    secondKey: number
    list: ThreeLayers[]
}

type ThreeLayers = {
    xtermActiveKey: number
    MultiKey: number
    multiList: Multi[]
}

type Multi = {
    name: string
    key: number
}

const props = defineProps<{
    username: string
    password: string
    // submitLoading: boolean
}>()
const soleKey = ref<number>(0);
let multiData = ref<MultiList[]>([])


onMounted(() => {
    let datas: MultiList = {
        firstKey: 0,
        secondList: [{
            secondKey: 1,
            list: [{ xtermActiveKey: 0, MultiKey: 0, multiList: [{ name: '1_root@iZuf64kquo56ciwmfp', key: soleKey.value }] }]
        }]
    }

    multiData.value.push(datas)
});

const onTabsEdit = (targetKey: number, i: ThreeLayers) => {
    console.log(targetKey)
    Modal.confirm({
        title: '再次确认?',
        icon: createVNode(ExclamationCircleOutlined),
        content: '是否要关闭标签，关闭后将失去所有消息，请谨慎操作！',
        onOk() {
            console.log(i.multiList)
            let targetKeyIndex = i.multiList.findIndex((item: Multi) => item.key === targetKey)
            i.multiList = i.multiList.filter((item: Multi) => item.key !== targetKey)
            if (i.multiList.length !== 0 && i.xtermActiveKey === targetKey) {
                if (targetKeyIndex >= 0) {
                    console.log(targetKeyIndex)
                    console.log(i.multiList[targetKeyIndex])
                    i.xtermActiveKey = i.multiList[targetKeyIndex].key;
                } else {
                    i.xtermActiveKey = i.multiList[0].key;
                }
            }
        },
        onCancel() { },
    });

}
const on_addXterm = (i: ThreeLayers) => {
    soleKey.value++
    i.multiList.push({ name: '1_root@iZuf64kquo56ciwmfp', key: soleKey.value })
    i.xtermActiveKey = soleKey.value
}
/**
 * 分屏
 * @param type 要分屏的位置
 * @param seconditem 数据源
 * @param secondIndex 数据源下标
 */
const on_SplitScreen = (type: string, seconditem: SecondList, secondIndex: number) => {
    soleKey.value++
    console.log(type)
    if (type === 'below') {
        seconditem.list.push({ xtermActiveKey: soleKey.value, MultiKey: soleKey.value, multiList: [{ name: '1_root@iZuf64kquo56ciwmfp', key: soleKey.value }] })
    } else if (type === 'right') {
        let datas: MultiList = {
            firstKey: 0,
            secondList: [{
                secondKey: 1,
                list: [{ xtermActiveKey: 0, MultiKey: 0, multiList: [{ name: '1_root@iZuf64kquo56ciwmfp', key: soleKey.value }] }]
            }]
        }
        multiData.value.splice(secondIndex++, 0, datas)
        console.log(multiData.value)
    }
}
</script>

<style scoped lang='less'>
.xtermList-style {
    display: flex;
    flex: 1;

    .layerTwo-style {
        flex: 1;

        .threeLayers-style {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
    }

    .xterm-icon {
        color: #333333;
        font-size: 20px;

        span {
            margin-right: 10px;
        }
    }
}
</style>