import { reactive, ref, onMounted, } from "vue";
import type { Ref } from "vue"
import { Modal } from 'ant-design-vue';
import type { FormInstance } from 'ant-design-vue';
import { resTable } from "@/utils/type/type"
type requestApi = {
    listApi: Function,
    deleteApi: Function
}

type pageData = {
    pageSize: number,
    page: number
}


type Key = string | number;

/**
 * 
 * @param SearchObject 搜索表单数据
 * @param requestApi 请求api的方法
 * @param tableDataFispose 表格数据是否需要二次处理
 * @returns sizeChange 数据
 */
export const useTableHooks = <K extends object>(searchFrom: K, requestApi: requestApi, tableDataFispose?: { Fun: Function, ifDispose: boolean }) => {
    //表格头部颜色
    const headerStyle = { background: '#F8F8F9' }
    const fromSearchRef: Ref = ref<any>()
    //表格高度
    let tabHeight = ref<number>(520)
    //分页
    let pageData = reactive<pageData>({
        pageSize: 10,
        page: 1
    })

    //表格是否正在加载
    const tableLoading = ref(false)
    const searchFormRef = ref<FormInstance>();
    const submitFormRef = ref<FormInstance>();
    //当前表格数据
    const tableData = ref([]);
    //分页参数
    const paginationOpt = reactive({
        current: 1,
        page: 10,
        pageSizeOptions: [10, 20, 50, 100, 200],
        total: 0,
        onChange: (current: number, size: number) => {
            paginationOpt.current = current
            paginationOpt.page = size
            pageData.pageSize = current
            pageData.page = size
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
    //表单重置
    const fromreset = (FormRef: any) => FormRef?.resetFields()
    onMounted(() => {
        let tableDom = document.querySelector('.table-style')
        if (tableDom) {
            let Height = tableDom.getBoundingClientRect().height
            tabHeight.value = Height - 120
        }
        requestList()
    })

    //请求接口
    const requestList = () => {
        tableLoading.value = true
        let fromData = { ...pageData, ...searchFrom }
        requestApi.listApi(fromData).then((res: resTable<any>) => {
            let { data, total } = res.data
            if (tableDataFispose?.ifDispose) {
                data = tableDataFispose.Fun(data)
            }
            tableLoading.value = false
            tableData.value = data
            paginationOpt.total = total
            tableState.selectedRowKeys = [];
        }, () => {
            tableLoading.value = false
        })
    }
    //删除接口
    const handleDelete = (params: Key[]) => {
        Modal.confirm({
            title: '确定要删除吗？',
            onOk() {
                return requestApi.deleteApi({ ids: params }).then((res: any) => {
                    console.log(res)
                    requestList()
                })
            },
            onCancel() { },
        });
    }

    const tableState = reactive<{
        selectedRowKeys: Key[];
        loading: boolean;
    }>({
        selectedRowKeys: [],
        loading: false,
    });
    const onTableSelectChange = (selectedRowKeys: Key[]) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        tableState.selectedRowKeys = selectedRowKeys;
    };




    return {
        headerStyle,
        tableData,
        fromSearchRef,
        tableLoading,
        tabHeight,
        paginationOpt,
        searchFormRef,
        submitFormRef,
        tableState,
        onTableSelectChange,
        fromreset,
        on_search,
        requestList,
        handleDelete
    };
}