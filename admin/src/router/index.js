import Vue from 'vue';
import Router from 'vue-router';

import layout from '@/layout/layout.vue';
// import treeRoute from '@/views/layout/router.vue';

Vue.use(Router);
const router = new Router({
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
                keepAlive: false
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
                    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue')
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
                    component: () => import(/* webpackChunkName: "myTask" */ '@/views/write/article.vue')
                },
                {
                    path: 'draft',
                    name: 'draft',
                    meta: {
                        title: 'draft',
                        icon: 'mdi-file',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "myTask" */ '@/views/write/draft.vue')
                }
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
                    component: () => import(/* webpackChunkName: "table" */ '@/views/manage/articles.vue')
                },
                {
                    path: 'comments',
                    name: 'comment',
                    meta: {
                        title: 'comment',
                        icon: 'mdi-comment-processing',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "charts" */ '@/views/manage/comments.vue')
                },
                {
                    path: 'classifications',
                    name: 'classification',
                    meta: {
                        title: 'classification',
                        icon: 'mdi-bookshelf',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "charts" */ '@/views/manage/classifications.vue')
                },
                {
                    path: 'tags',
                    name: 'tag',
                    meta: {
                        title: 'tag',
                        icon: 'mdi-tag-multiple',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "starTask" */ '@/views/manage/tags.vue')
                },
                {
                    path: 'users',
                    name: 'user',
                    meta: {
                        title: 'user',
                        icon: 'mdi-account-group',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "starTask" */ '@/views/manage/users.vue')
                },
                {
                    path: 'files',
                    name: 'file',
                    meta: {
                        title: 'file',
                        icon: 'mdi-file-multiple',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "starTask" */ '@/views/manage/files.vue')
                },
                {
                    path: 'links',
                    name: 'link',
                    meta: {
                        title: 'link',
                        icon: 'mdi-link-variant',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "starTask" */ '@/views/manage/links.vue')
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
                    component: () => import(/* webpackChunkName: "map" */ '@/views/setting/ppt.vue')
                },
                {
                    path: '/theme',
                    name: 'theme',
                    meta: {
                        title: 'theme',
                        icon: 'mdi-theme-light-dark',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "map" */ '@/views/setting/theme.vue')
                },
            ]
        },
        // 流程图
        // {
        //     path: '/flow-editor',
        //     visible: true,
        //     component: layout,
        //     meta: {
        //         title: 'flowEditor',
        //         icon: 'mdi-vector-triangle',
        //         keepAlive: false
        //     },
        //     children: [
        //         {
        //             path: '/flow-editor',
        //             name: 'FlowEditor',
        //             meta: {
        //                 title: 'Flow Editor',
        //                 icon: 'mdi-vector-triangle',
        //                 keepAlive: false
        //             },
        //             component: () => import(/* webpackChunkName: "flowchart" */ '@/views/flowchart/index.vue')
        //         }
        //     ]
        // },
        // 测试页面缓存
        {
            path: '/keep-alive',
            visible: false,
            component: layout,
            meta: {
                title: 'keepAlive',
                icon: 'mdi-archive-arrow-down-outline',
                keepAlive: false
            },
            children: [
                {
                    path: '/keep-alive',
                    name: 'keepAlive',
                    meta: {
                        title: 'Keep Alive',
                        strategy: 'keep', // keep,  refresh
                        keepAlive: true
                    },
                    component: () => import(/* webpackChunkName: "keepAlive" */ '@/views/keep-alive/index.vue'),
                }
            ]
        },
        // 测试离开缓存页面
        {
            path: '/keep-alive',
            visible: false,
            component: layout,
            meta: {
                title: 'keepAlive',
                icon: 'mdi-archive-arrow-down-outline',
                keepAlive: false
            },
            children: [
                {
                    path: ':id',
                    name: 'ddddd',
                    meta: {
                        title: 'Keep Alive',
                        icon: '',
                        keepAlive: false
                    },
                    component: () => import(/* webpackChunkName: "widget22" */ '@/views/keep-alive/inner.vue')
                }
            ]
        },
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
            component: () => import(/* webpackChunkName: "login" */ '@/views/login/logout.vue')
        },
        {
            path: '/login',
            name: 'login',
            visible: true,
            meta: {
                title: 'login',
                icon: 'mdi-login',
                keepAlive: false
            },
            component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
        },
        {
            path: '/404',
            name: '404',
            visible: false,
            component: () => import(/* webpackChunkName: "404page" */ '@/views/exception-page/404.vue'),
            meta: {
                title: '404',
                keepAlive: false
            }
        },
        { path: '*', redirect: '/404' }
    ],
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition;
    //     } else {
    //         return { x: 0, y: 0 };
    //     }
    // }
});

export default router;