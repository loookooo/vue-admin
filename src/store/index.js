import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import login from './modules/login.js';
import layout from './modules/layout.js';
export default new Vuex.Store({
    modules: {
        login,
        layout
    }
});