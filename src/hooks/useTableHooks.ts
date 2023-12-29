import { reactive, ref, onMounted, } from "vue";
import type { Ref } from "vue"


type requestApi = {
    listApi: Function,
    deleteApi: Function
}

type pageData = {
    pageNum: number,
    pageSize: number
}

type resTable = {
    Data: any
    Total:number
}

/**
 * 
 * @param SearchObject 搜索表单数据
 * @param requestApi 请求api的方法
 * @returns sizeChange 数据
 */
export const useTableHooks = <K extends object>(searchFrom: K, requestApi: requestApi) => {
    //表格头部颜色
    const headerStyle = { background: '#F8F8F9' }
    const fromSearchRef: Ref = ref<any>()
    //表格高度
    let tabHeight = ref<number>(520)
    //分页
    let pageData = reactive<pageData>({
        pageNum: 1,
        pageSize: 10
    })
    //表格是否正在加载
    const tableLoading = ref(false)
    const searchFormRef = ref<any>();

    //当前表格数据
    const tableData = ref([]);
    //分页参数
    const paginationOpt = reactive({
        current: 1,
        pageSize: 10,
        pageSizeOptions: [10, 20, 50, 100, 200],
        total: 0,
        onChange: (current: number, size: number) => {
            console.log(current)
            console.log(size)
            paginationOpt.current = current
            paginationOpt.pageSize = size
            pageData.pageNum = current
            pageData.pageSize = size
            requestList()
        },
    })



    /**
     * 点击搜索，确认搜索条件
     * @param data 搜索条件，如果没有传入就用初始化传入的搜素条件(主要功能是为了搜索条件可能需要二次处理)  非必传
     */
    const on_search = () => {
        requestList()
    }

    //搜索表单重置
    const fromreset = () => {
        searchFormRef.value.resetFields()
    }

    onMounted(() => {
        let tableDom = document.querySelector('.table-style')
        if (tableDom) {
            let Height = tableDom.getBoundingClientRect().height
            tabHeight.value = Height - 120
        }
        console.log(tabHeight.value)
        requestList()
    })

    //请求接口
    const requestList = () => {

        let fromData = { ...pageData, ...searchFrom }
        requestApi.listApi(fromData).then((res:resTable ) => {
            let { Data, Total } = res.Data
            tableData.value = Data
            paginationOpt.total =Total
        })
    }
    //删除接口
    const handleDelete = (params: number) => {
        requestApi.deleteApi(params)

    }

    return {
        headerStyle,
        tableData,
        fromSearchRef,
        tableLoading,
        tabHeight,
        paginationOpt,
        searchFormRef,
        fromreset,
        on_search,
        requestList,
        handleDelete
    };
}