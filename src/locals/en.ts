// en.js

let inputPublicEn: string = 'please input'


export default {
    login: {
        login: 'login',
        account: 'account',
        password: 'password',
        record: 'Remember me',
        accountMessage: `${inputPublicEn} your account!`,
        passwordMessage: `${inputPublicEn} your password!`,
    },
    user: {
        addUser:"add user",
        userName:"userName",
        password: 'password',
        mame: 'name',
        userState:"user state",
        usereEmail:'email',
        telephone:'telephone'
    },
    department: {
        departmentName: 'name',
        departmentNamePlaceholder: `${inputPublicEn} department name`,
        departmentId:"id",
        departmentIdPlaceholder: `${inputPublicEn} department id`,
        departmentDescribe:"department describe",
        departmentLocation:'location',
        departmentLocationPlaceholder: `${inputPublicEn} department location`,

        superiorDepartment:'superior department',
        subordinateDepartment:'subordinate department',

        addSubordinateDepartment:'add subordinate',
        description: 'Department description',
        add_user: 'add_user'
    },


    device: {
        deviceName: 'deviceName',
        deviceAddress:'deviceAddress',
        deviceOsKind:'deviceOsKind',
        deviceEncoding:'deviceEncoding',
        deviceAccount :'deviceAccount',

        deviceUsername:"设备账号名称",
        Password:"password",
        IsAdministrator:"isAdministrator",
        Port:"port",
        Protocol:"protocol",
        PrivateKey:"rivateKey",
        PrivateKeyPassword:"privateKeyPassword",
    },

    asideMenu: {
        userinfo: 'userinfo'
    },
    public: {
        Submit: 'Submit',
        delete: 'delete',
        deleteInBatches: 'delete in batches',
        add: 'add',
        redact: 'redact',
        operation: 'operation',
        reset: "redact",
        search: "search",
        creationTime:"creation time",
        departmentID:'departmentID',
        roleId:"role",
        Description:'description',
        pleaseInput:'please input',
        pleaseSelect:`please select`

    },
    menu: {
        configuration: 'configuration',
        userAdmin: 'user admin',
        departmentAdmin: 'department admin',
        roleAdmin: "role admin",
        uploadingAdmin: "uploading admin",
        deviceAdmin:"device admin"
    },
    socket:{
        error:"socket connection error",
    }



}
