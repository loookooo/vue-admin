import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Layout from '@/views/Layout/index.vue';

const routes = [{
        path: "/",
        redirect: "login",
        meta: {
            name: '主页',
            show: false,
        }
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            name: '登录',
            show: false,
        },
        component: () =>
            import ("../views/Login/index.vue")
    },
    {
        path: "/layout",
        name: "Layout",
        redirect: "home",
        meta: {
            name: '统计分析',
            show: true,
        },
        component: Layout,
        children: [{
            path: "/home",
            name: "Home",
            meta: {
                name: '首页',
                show: true,
            },
            component: () =>
                import ("../views/Home/index.vue")
        }]

    },
    {
        path: "/layout",
        name: "Layout",
        redirect: "home",
        meta: {
            name: '用户管理',
            show: true,
        },
        component: Layout,
        children: [{
            path: "/home",
            name: "Home",
            meta: {
                name: '用户列表',
                show: true,
            },
            component: () =>
                import ("../views/Home/index.vue")
        }]

    },
    // {
    //     path: "/Test",
    //     name: "Test",
    //     component: () =>
    //         import ("../views/Test/index.vue")
    // }
];

const router = new VueRouter({
    routes
});

export default router;