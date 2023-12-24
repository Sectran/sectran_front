type HeadMenu = {
    name: string
    children?: HeadMenu[]
}


export const headMenu: HeadMenu[] = [
    {
        name: "文件",
        children: [
            { name: "新建文件" },
            { name: "新建文件夹" },
            { name: "divider" },
            { name: "打开新文件树" },
            { name: "divider" },
            { name: "打开新文件管理" },
            { name: "divider" },
            { name: "保存" },
            { name: "全部保存" },
        ],
    },
    {
        name: "编辑",
        children: [
            { name: "撤销" },
            { name: "重做" },
            { name: "divider" },
            { name: "复制" },
            { name: "剪切" },
            { name: "divider" },
            { name: "查找" },
            { name: "替换" },
        ],
    },
    {
        name: "视图",
        children: [
            { name: "打开视图" },
            { name: "最近访问" },
            { name: "divider" },
            { name: "显示/隐藏菜单栏" },
            { name: "显示/隐藏状态栏" },
            { name: "显示/隐藏按钮栏" },
            { name: "显示/隐藏工具栏" },
            { name: "显示/隐藏实例菜单栏" },
            { name: "divider" },
            { name: "导出布局数据" },
            { name: "导入布局" },
            { name: "折叠所有侧边面板" },
        ],
    },
    {
        name: "实例",
        children: [
            { name: "切换实例" },
            { name: "新建实例窗口" },
            { name: "私网链路" },
            { name: "退出实例登录" },
        ],
    },
    {
        name: "会话",
        children: [
            { name: "新终端" },
            { name: "横向打开新终端" },
            { name: "纵向打开新终端" },
            { name: "divider" },
            { name: "会话管理" },
            { name: "最近访问" },
            { name: "会话列表" },
        ],
    },
    {
        name: "功能",
        children: [
            { name: "系统管理" },
            { name: "运维功能", children: [{ name: "javaDump" }] },
            { name: "多屏终端" },
        ],
    },
];