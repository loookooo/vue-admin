import { login } from '@/api/login.js';
import { getToken, getUserInfo, setToken, setUserInfo } from '@/utils/cookie.js';
const state = {
    token: getToken(),
    userinfo: getUserInfo()
};
const getters = {

};
const mutations = {
    // setToken(state, value) {
    //     state.token = value;
    // },
    // setUserInfo(state, value) {
    //     state.userinfo = value;
    // }
};
const actions = {
    X_login({ commit, state }, data) {
        return new Promise((resolve, reject) => {
            login(data).then(res => {
                //获取token,userinfo存储到cookie
                setToken(res.data.token);
                setUserInfo(res.data.data);
                //获取token,userinfo存储到 vuex
                // commit('setToken', res.data.token);
                // commit('setUserInfo', res.data.data);
                resolve(res);
            }).catch(res => {
                console.log(res);
                reject(res)
            })
        })
    }
}
export default {
    namespaced: true, //是否给模块命名空间
    state,
    getters,
    mutations,
    actions
}