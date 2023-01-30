export default [
    {
        path:'/',
        redirect:'/index',
        component: require('../view/main.vue'),
        children: [{
            path: '/index',
            component: require('../view/index/index.vue')
        },
        {
            path:'/developmentAccess',
            component: require('../view/developmentAccess/developmentAccess.vue')
        },
        {
            path:'/developmentDocument',
            component: require('../view/document/developmentDocument.vue')
        },
        {
            path:'/about',
            component: require('../view/about/about.vue')
        },
        {
            path: '/manageHome',
            redirect:'/manageHome/platform',
            component: require('../view/manageHome/manageHome.vue'),
            children: [{
                path: '/manageHome/platform',
                component: require('../view/manageHome/platform/platform.vue'),
                redirect:'/manageHome/platform/developerIndex',
                    children: [{
                        path: '/manageHome/platform/developerIndex',
                        component: require('../view/manageHome/platform/platformContent/developerIndex.vue')
                    },
                    {
                        path: '/manageHome/platform/appManage',
                        component: require('../view/manageHome/platform/platformContent/appManage.vue')
                    },
                    {
                        path: '/manageHome/platform/yanfa',
                        component: require('../view/manageHome/platform/platformContent/yanfa.vue')
                    },
                    {
                        path: '/manageHome/platform/appCreate',
                        component: require('../view/manageHome/platform/platformContent/appCreate.vue')
                    }]
            }]
        }]
    }
]
