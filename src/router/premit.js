import router from "@/router";
import { getToken } from "../utils/cookie";
//路由守卫
router.beforeEach((to, from, next) => {
    if (getToken()) {
        next()
    } else {
        if (to.path == '/login') {
            next()
        } else {
            console.log('未登录')
            next('/login')
        }
    }
    // to 下一个页面
    // from 上一个页面
    //next()不带参数 默认下一个页面 ， 带参数 为去该参数页面
})