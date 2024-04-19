//配置管理
let layoutRouter = [
    {
        path: '/admin',
        component: () => import('views/layout/index.vue'),
        name: 'admin',
        meta: {
            title: 'configuration',
        },
        children: [
            {
                path: 'user',
                name: 'user',
                component: () => import('views/table/user.vue'),
                meta: {
                    title: 'userAdmin',
                    limits: ":user",
                    ismenu:true,
                },
            },
            {
                path: 'department',
                name: 'department',
                component: () => import('views/table/department.vue'),
                meta: {
                    title: 'departmentAdmin',
                    limits: ":department",
                    ismenu:true,
                },
            },

            {
                path: 'role',
                name: 'role',
                component: () => import('views/table/role.vue'),
                meta: {
                    title: 'roleAdmin',
                    limits: ":role",
                    ismenu:true,
                },
            },
            {
                path: 'uploading',
                name: 'uploading',
                component: () => import('views/table/uploading.vue'),
                meta: {
                    title: 'uploadingAdmin',
                    limits: ":uploading",
                    ismenu:true,
                },
            },
            {
                path: 'device',
                name: 'device',
                component: () => import('views/table/device.vue'),
                meta: {
                    title: 'deviceAdmin',
                    limits: ":device",
                    ismenu:true,
                },
            }
        ]
    }]

export default layoutRouter;

