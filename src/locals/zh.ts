// zh.js
let inputPublicZh: string = '请输入'
export default {
    login: {
        login: '登录',
        account: '账户',
        password: '密码',
        record: '记住密码',
        accountMessage: `${inputPublicZh}账户名称!`,
        passwordMessage: `${inputPublicZh}密码!`,
    },
    user: {
        addUser:"添加用户",
        userName:"用户名称",
        account: '用户账号',
        password: '用户密码',
        mame: '用户名称',
        userState:"用户状态",
        usereEmail:'电子邮箱',
        telephone:'手机号', 
        CorrectPassword:'正确的密码'
    },
    department: {
        departmentName: '部门名称',
        departmentNamePlaceholder: `${inputPublicZh}部门名称!`,
        departmentId:"部门ID",
        departmentIdPlaceholder: `${inputPublicZh}部门ID!`,
        departmentDescribe:"部门描述",
        departmentLocation:'部门归属地',
        departmentLocationPlaceholder: `${inputPublicZh}部门归属地!`,
        superiorDepartment:'上级部门',
        subordinateDepartment:'下级部门',
        description: '部门描述',
        add_user: '添加人',
        addSubordinateDepartment:'添加下级',
    },
    asideMenu: {
        userinfo: '用户信息'
    },
    device: {
        deviceName: '设备名称',
        deviceAddress:'设备地址',
        deviceOsKind:'系统类型',
        deviceEncoding:'字符编码',
        deviceAccount :'设备账号',
        deviceUsername:"账号名称",
        Password:"设备账号密码",
        IsAdministrator:"是否管理员",
        Port:"端口",
        Protocol:"协议",
        PrivateKey:"私钥",
        PrivateKeyPassword:"key密码",
        bindAccount:"绑定账号",
    },
    role:{
        roleName:"角色名",
        roleWeight:"角色权重",
        permissionlist:'权限列表'
    },

    public: {
        Submit: '提 交',
        delete: '删 除',
        deleteInBatches: '删除',
        add: '新 增',
        redact: '编 辑',
        operation: '操 作',
        reset: "重 置",
        search: "搜 索",
        creationTime:"创建时间",
        departmentID:'部门ID',
        departmentName:'部门名称',
        roleId:"角色ID",
        roleName:"角色名称",

        Description:'描述',
        pleaseInput:'请输入',
        pleaseSelect:`请选择`,
        creationDate:"创建日期",
        UpdateDate:"更新日期",
        nolimits:"暂无权限",
        status:"状态",
        columnShow:"显示列",
        open:"开启",
        close:"关闭",
        cancel:"取消"

       
    },
    message:{
        success:"操作成功"
    },
    menu: {
        configuration: '配置',
        userAdmin: '人员管理',
        departmentAdmin: '部门管理',
        roleAdmin: "角色管理",
        uploadingAdmin: "连接管理",
        deviceAdmin:"资源管理"
    },
    socket:{
        error:"连接已关闭",
    }
}
