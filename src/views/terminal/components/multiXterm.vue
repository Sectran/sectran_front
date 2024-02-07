<template>
    <div class="xtermList-style">
        <!-- :class="{ 'flex-column': props.multiItem.styleType === 'longitudinal' }" -->
        <!-- <div v-for="(item, multiIndex) in multiData" :key="item.firstKey" class="layerTwo-style">
            <div v-for="(el, secondIndex) in item.secondList" :key="el.secondKey" class="threeLayers-style">
                <div v-for="(i, index) in el.list" :key="i.multiKey" style="flex:1">
                    <a-tabs v-model:activeKey="i.xtermActiveKey" hide-add type="editable-card" :forceRender="true"
                        @edit="(e: number) => onTabsEdit(e, i, multiIndex, secondIndex)">
                        <a-tab-pane v-for="e in i.multiList" :key="e.key" :tab="e.name" :closable="true">
                            @connectResult="connectResult" :submitLoading="submitLoading"
                            <xterm :username="props.username" :password="props.password"> </xterm>
                            <div>1231</div>
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
        </div> -->
        <div style="flex: 1;">
            {{ props.node.key }}
            <holl />
            <!-- <ColumnWidthOutlined @click="on_SplitScreen('transverse', item)" />
            <ColumnHeightOutlined @click="on_SplitScreen('Longitudinal', item)" /> -->
            <span @click="on_jia">加</span>
            <!-- <span @click="on_jian">减</span> -->
        </div>
        <template v-if="props.node.node">
            <multi-xterm :node="props.node.node"></multi-xterm>
        </template>
    </div>
</template>


<script setup lang="ts">

import multiXterm from "./multiXterm.vue"
import holl from "@/components/holl"
// import {
//     PlusSquareOutlined,
//     ColumnWidthOutlined,
//     ColumnHeightOutlined,
// } from '@ant-design/icons-vue';
import {
    onMounted,
    ref,
    // reactive,
    // createVNode
} from "vue";


// import { Modal } from 'ant-design-vue';
// import { ExclamationCircleOutlined } from '@ant-design/icons-vue';


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
    multiKey: number
    multiList: Multi[]
}

type Multi = {
    name: string
    key: number
}

const props = defineProps<{
    // username: string
    // password: string
    // submitLoading: boolean
    // multiItem: any
    node: any
}>()
const soleKey = ref<number>(0);
let multiData = ref<MultiList[]>([])


onMounted(() => {
    let datas: MultiList = {
        firstKey: 0,
        secondList: [{
            secondKey: 1,
            list: [{ xtermActiveKey: 0, multiKey: 0, multiList: [{ name: '1_root@iZuf64kquo56ciwmfp', key: soleKey.value }] }]
        }]
    }
    multiData.value.push(datas)
});


const on_jia = () => {
    props.node.node = {
        styleType: "transverse",
        key: 5,
    }
}

// const onTabsEdit = (targetKey: number, i: ThreeLayers, multiIndex: number, secondIndex: number) => {
//     Modal.confirm({
//         title: '再次确认?',
//         icon: createVNode(ExclamationCircleOutlined),
//         content: '是否要关闭标签，关闭后将失去所有消息，请谨慎操作！',
//         onOk() {
//             let targetKeyIndex = i.multiList.findIndex((item: Multi) => item.key === targetKey) - 1
//             i.multiList = i.multiList.filter((item: Multi) => item.key !== targetKey)

//             if (i.multiList.length === 0) {
//                 console.log(secondIndex)
//                 let asd = multiData.value[multiIndex].secondList.splice(secondIndex, 1)
//                 console.log(asd)
//                 console.log(multiData.value[multiIndex].secondList)
//                 if (multiData.value[multiIndex].secondList.length === 0) {

//                     // multiData.value.splice(multiIndex, 1)
//                 }
//                 return
//             }
//             if (i.xtermActiveKey === targetKey) {
//                 if (targetKeyIndex >= 0) {
//                     i.xtermActiveKey = i.multiList[targetKeyIndex].key;
//                 } else {
//                     i.xtermActiveKey = i.multiList[0].key;
//                 }
//             }
//         },
//         onCancel() { },
//     });

// }
// const on_addXterm = (i: ThreeLayers) => {
//     soleKey.value++
//     i.multiList.push({ name: '1_root@iZuf64kquo56ciwmfp', key: soleKey.value })

//     i.xtermActiveKey = soleKey.value
//     console.log(i.xtermActiveKey)
// }
/**
 * 分屏
 * @param type 要分屏的位置
 * @param seconditem 数据源
 * @param secondIndex 数据源下标
 */
// const on_SplitScreen = (type: string, seconditem: SecondList) => {
//     // soleKey.value++
//     console.log(type)
//     console.log(seconditem)
//     // if (type === 'below') {
//     //     seconditem.list.push({ xtermActiveKey: soleKey.value, multiKey: soleKey.value, multiList: [{ name: '1_root@iZuf64kquo56ciwmfp', key: soleKey.value }] })
//     // } else if (type === 'right') {
//     //     let datas: MultiList = {
//     //         firstKey: soleKey.value++,
//     //         secondList: [{
//     //             secondKey: soleKey.value++,
//     //             list: [{ xtermActiveKey: soleKey.value, multiKey: soleKey.value, multiList: [{ name: '1_root@iZuf64kquo56ciwmfp', key: soleKey.value }] }]
//     //         }]
//     //     }
//     //     console.log(secondIndex)
//     //     multiData.value.splice(secondIndex + 1, 0, datas)
//     //     console.log(multiData.value)
//     // }
// }
</script>

<style scoped lang='less'>
.xtermList-style {
    display: flex;
    flex: 1;

    .flex-column {
        flex-direction: column;
    }

    .layerTwo-style {
        flex: 1;
        display: flex;
        border: 1px solid red;

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

.nr-style {
    width: 100%;
    height: 100%;
    background: red;
}
</style>