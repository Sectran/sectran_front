//配置管理
let layoutRouter = [
    {
        path: '/admin',
        component: () => import('views/layout/index.vue'),
        name: 'admin',
        meta: {
            // title: '配置管理',
            title: 'configuration',
        },
        children: [
            {
                path: 'user',
                name: 'user',
                component: () => import('views/table/user.vue'),
                meta: {
                    title: 'userAdmin',
                },
            },
            {
                path: 'department',
                name: 'department',
                component: () => import('views/table/department.vue'),
                meta: {
                    title: 'departmentAdmin',
                },
            },

            {
                path: 'role',
                name: 'role',
                component: () => import('views/table/role.vue'),
                meta: {
                    title: 'roleAdmin',
                },
            },
            {
                path: 'uploading',
                name: 'uploading',
                component: () => import('views/table/uploading.vue'),
                meta: {
                    title: 'uploadingAdmin',
                },
            },
            {
                path: 'device',
                name: 'device',
                component: () => import('views/table/device.vue'),
                meta: {
                    title: 'deviceAdmin',
                },
            },


            





        ]
    }]

export default layoutRouter;

