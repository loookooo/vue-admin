const state = {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false
};
const getters = {

};
const mutations = {
    Set_isCollapse(state) {
        state.isCollapse = !state.isCollapse;
        sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
    }
};
const actions = {

}
export default {
    namespaced: true, //是否给模块命名空间
    state,
    getters,
    mutations,
    actions
}