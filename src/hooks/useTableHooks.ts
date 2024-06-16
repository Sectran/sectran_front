import { reactive, ref, onMounted, } from "vue";
import type { Ref } from "vue"
import { Modal } from 'ant-design-vue';
import type { FormInstance } from 'ant-design-vue';
import { resTable } from "@/common/type/type"
import { SearchFronModel, Columns } from "@/common/type/type"
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
 * @param tableDataHandle 表格数据二次处理
 * @returns sizeChange 数据
 */
export const useTableHooks = (requestApi: requestApi, tableDataHandle: Function = (data: any) => data) => {
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
    //搜索字段
    let searchFrom = reactive({})
    //分页参数
    const paginationOpt = reactive({
        current: 1,
        page: 10,
        pageSizeOptions: [10, 20, 50, 100, 200],
        total: 0,
        showTotal: (total: number) => `共 ${total} 条数据`,
        onChange: (current: number, size: number) => {
            paginationOpt.current = current
            paginationOpt.page = size
            pageData.pageSize = current
            pageData.page = size
            requestList()
        },
    })

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

    const on_search = () => {
        pageData.page = 1
        searchFrom = {}
        searchTags.value.forEach((item: SearchFronModel) => {
            if (item.value !== "" || item.value !== undefined) searchFrom[item.key] = item.value
        })

        requestList()
    }
    //请求接口
    const requestList = () => {
        tableLoading.value = true
        let fromData = { ...pageData, ...searchFrom }
        requestApi.listApi(fromData).then((res: resTable<any>) => {
            let { data, total } = res.data

            tableLoading.value = false
            tableData.value = tableDataHandle(data)
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

    //查询
    let searchInputValue = ref<string | number>("")
    let searchModelItem = ref<SearchFronModel>()
    const searchTags = ref<SearchFronModel[]>([])
    let columnsCheckboxArray = ref<string[]>([])
    const tableColumns = ref<Columns[]>()
    let columnsData: Columns[] = []
    let columnsStorageKey = ""
    /**
     * 初始化搜索表单
     * @param searchFronModelData 搜索表单数据
     * @param columnsDataSource 表格columns
     * @param searchFronModelData 搜索表单数据
     */
    const initializeSearchTable = (searchFronModelData: SearchFronModel[], columnsDataSource: Columns[], columnsStorage: string) => {
        columnsStorageKey = columnsStorage
        // searchFronModel = searchFronModelData
        searchModelItem.value = searchFronModelData[0]
        console.log(columnsDataSource)
        columnsData = columnsDataSource
        let columnsStorageJson = localStorage.getItem(columnsStorageKey) as string | null;
        if (columnsStorageJson) {
            columnsCheckboxArray.value = JSON.parse(columnsStorageJson)
        } else {
            columnsCheckboxArray.value = columnsData.map((item: Columns) => item.dataIndex)
        }
        changeColumnsCheckbox()
    }

    const handleMenuClick = (item: { key: SearchFronModel }) => {
        if (item.key.disposefun) item.key.disposefun(item)
        else searchModelItem.value = item.key

    }
    const onInputTag = () => {
        if (searchInputValue.value && searchModelItem.value) {
            operateTags(searchInputValue.value)
            searchInputValue.value = ""
            on_search()
        }
    }



    /**
     * 操作tags
     * @param value 值
    */
    const operateTags = (value: string | number | boolean, assignSearchFronModel?: SearchFronModel) => {
        let Item = assignSearchFronModel || searchModelItem.value
        let tagsIndex = searchTags.value.findIndex((item: SearchFronModel) => item.key === Item?.key)
        if (Item) {
            let tags: SearchFronModel = {
                ...Item,
                value,
            }
            console.log(tags)
            if (tagsIndex !== -1) {
                searchTags.value.splice(tagsIndex, 1, tags);
            } else {
                searchTags.value.push({ ...tags })
            }
        }
    }

    const changeColumnsCheckbox = () => {
        console.log(columnsData);
        tableColumns.value = columnsData.filter((item: Columns) => columnsCheckboxArray.value.some((el: string) => el == item.dataIndex))
        localStorage.setItem(columnsStorageKey, JSON.stringify(columnsCheckboxArray.value));
    }
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
        handleDelete,
        //查询
        onInputTag,
        operateTags,
        handleMenuClick,
        changeColumnsCheckbox,
        initializeSearchTable,
        searchInputValue,
        searchModelItem,
        searchTags,
        columnsCheckboxArray,
        tableColumns
    };
}