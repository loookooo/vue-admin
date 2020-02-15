import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "login"
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/Login/index.vue")
    },
    {
        path: "/Test",
        name: "Test",
        component: () =>
            import ("../views/Test/index.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;