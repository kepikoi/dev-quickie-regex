import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
import * as actions from './actions'
import * as types from './types';

const state = {
    page: 1
};

const mutations = {
    [types.SET_PAGE](state, page){
        state.page = page
    },
    [types.NEXT_PAGE](state){
        state.page++;
    },
    [types.PREV_PAGE](state){
        state.page > 1 ? state.page-- : null;
    },
};

const getters = {
    page: state => state.page,
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: true
})