import Vue from 'vue';
import Router from 'vue-router';

import layout from '@/layout/layout.vue';
// import treeRoute from '@/views/layout/router.vue';

Vue.use(Router);
let router = new Router({
    // mode:'history',
    routes: [
        //首页
        {
            path: '/',
            redirect: '/login',
            name: 'index',
            visible: false,
            component: layout,
            meta: {
                title: 'home',
                keepAlive: false,
                isPublic:true
            }
        },

        // 仪表盘
        {
            path: '/dashboard',
            visible: true,
            component: layout,
            meta: {
                title: 'dashboard',
                icon: 'mdi-gauge',
                keepAlive: false
            },
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    meta: {
                        title: 'dashboard',
                        icon: 'mdi-gauge',
                        keepAlive: false
                    },
                    component: () => import('@/views/dashboard/index.vue')
                },
            ]
        },
        {
            path: '/edit',
            visible: false,
            component: layout,
            meta: {
                title: 'edit',
                icon: 'mdi-gauge',
                keepAlive: false
            },
            children: [
                {
                    path: '/edit/:id',
                    name: 'edit',
                    meta: {
                        title: 'edit',
                        icon: 'mdi-file-document-edit-outline',
                        keepAlive: false
                    },
                    component: () => import('@/views/write/edit.vue')
                },
            ]
        },
        //撰写
        {
            path: '/write',
            visible: true,
            component: layout,
            redirect: '/write/article',
            meta: {
                title: 'write',
                icon: 'mdi-note-plus',
                keepAlive: false
            },
            children: [
                {
                    path: 'article',
                    name: 'article',
                    meta: {
                        title: 'article',
                        icon: 'mdi-note-plus',
                        keepAlive: false
                    },
                    component: () => import('@/views/write/article.vue')
                },
                {
                    path: 'draft',
                    name: 'draft',
                    meta: {
                        title: 'draft',
                        icon: 'mdi-file',
                        keepAlive: false
                    },
                    component: () => import('@/views/write/draft.vue')
                },
                // {
                //     path: 'edit/:id',
                //     name: 'edit',
                //     meta: {
                //         title: 'edit',
                //         icon: 'mdi-pencil',
                //         keepAlive: false
                //     },
                //     component: () => import(/* webpackChunkName: "myTask" */ '@/views/write/edit.vue')
                // },
            ]
        },
        
        // 管理
        {
            path: '/manage',
            visible: true,
            redirect: '/manage/manageArticles',
            component: layout,
            meta: {
                title: 'manage',
                icon: ' mdi-post-outline',
                keepAlive: false
            },
            children: [
                {
                    path: 'manageArticles',
                    name: 'manageArticles',
                    meta: {
                        title: 'manageArticles',
                        icon: 'mdi-note-text',
                        keepAlive: false
                    },
                    component: () => import('@/views/manage/articles.vue')
                },
                {
                    path: 'comments',
                    name: 'comment',
                    meta: {
                        title: 'comment',
                        icon: 'mdi-comment-processing',
                        keepAlive: false
                    },
                    component: () => import('@/views/manage/comments.vue')
                },
                {
                    path: 'classifications',
                    name: 'classification',
                    meta: {
                        title: 'classification',
                        icon: 'mdi-bookshelf',
                        keepAlive: false
                    },
                    component: () => import('@/views/manage/classifications.vue')
                },
                {
                    path: 'tags',
                    name: 'tag',
                    meta: {
                        title: 'tag',
                        icon: 'mdi-tag-multiple',
                        keepAlive: false
                    },
                    component: () => import( '@/views/manage/tags.vue')
                },
                {
                    path: 'users',
                    name: 'user',
                    meta: {
                        title: 'user',
                        icon: 'mdi-account-group',
                        keepAlive: false
                    },
                    component: () => import( '@/views/manage/users.vue')
                },
                {
                    path: 'files',
                    name: 'file',
                    meta: {
                        title: 'file',
                        icon: 'mdi-file-multiple',
                        keepAlive: false
                    },
                    component: () => import( '@/views/manage/files.vue')
                },
                {
                    path: 'links',
                    name: 'link',
                    meta: {
                        title: 'link',
                        icon: 'mdi-link-variant',
                        keepAlive: false
                    },
                    component: () => import( '@/views/manage/links.vue')
                },
            ]
        },
        // 设置
        {
            path: '/setting',
            visible: true,
            // redirect: '/setting/ppt',
            component: layout,
            meta: {
                title: 'setting',
                icon: 'mdi-cogs',
                keepAlive: false
            },
            children: [
                {
                    path: '/ppt',
                    name: 'ppt',
                    meta: {
                        title: 'ppt',
                        icon: 'mdi-image-size-select-actual',
                        keepAlive: false
                    },
                    component: () => import('@/views/setting/ppt.vue')
                },
                {
                    path: '/theme',
                    name: 'theme',
                    meta: {
                        title: 'theme',
                        icon: 'mdi-theme-light-dark',
                        keepAlive: false
                    },
                    component: () => import('@/views/setting/theme.vue')
                },
            ]
        },
        // // 测试页面缓存
        // {
        //     path: '/keep-alive',
        //     visible: false,
        //     component: layout,
        //     meta: {
        //         title: 'keepAlive',
        //         icon: 'mdi-archive-arrow-down-outline',
        //         keepAlive: false
        //     },
        //     children: [
        //         {
        //             path: '/keep-alive',
        //             name: 'keepAlive',
        //             meta: {
        //                 title: 'Keep Alive',
        //                 strategy: 'keep', // keep,  refresh
        //                 keepAlive: true
        //             },
        //             component: () => import( '@/views/keep-alive/index.vue'),
        //         }
        //     ]
        // },
        // // 测试离开缓存页面
        // {
        //     path: '/keep-alive',
        //     visible: false,
        //     component: layout,
        //     meta: {
        //         title: 'keepAlive',
        //         icon: 'mdi-archive-arrow-down-outline',
        //         keepAlive: false
        //     },
        //     children: [
        //         {
        //             path: ':id',
        //             name: 'ddddd',
        //             meta: {
        //                 title: 'Keep Alive',
        //                 icon: '',
        //                 keepAlive: false
        //             },
        //             component: () => import( '@/views/keep-alive/inner.vue')
        //         }
        //     ]
        // },
        // 退出登录
        {
            path: '/logout',
            name: 'logout',
            visible: true,
            meta: {
                title: 'logout',
                icon: 'mdi-logout',
                keepAlive: false
            },
            component: () => import( '@/views/login/logout.vue')
        },
        {
            path: '/login',
            name: 'login',
            visible: true,
            meta: {
                title: 'login',
                icon: 'mdi-login',
                keepAlive: false,
                isPublic:true
            },
            component: () => import( '@/views/login/index.vue')
        },
        {
            path: '/404',
            name: '404',
            visible: false,
            component: () => import( '@/views/exception-page/404.vue'),
            meta: {
                title: '404',
                keepAlive: false
            }
        },
        { path: '*', redirect: '/404' }
    ],

});
router.beforeEach((to, from, next) => {

    if(!to.meta.isPublic&&!localStorage.token){
        console.log("未登录");
        return next('/')
    }
    next()
})
export default router;