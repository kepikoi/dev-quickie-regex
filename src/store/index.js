import Vue from 'vue'
import Vuex from 'vuex'
import router from 'vue-router'
Vue.use(Vuex);
import * as actions from './actions'
import * as types from './types';

const state = {
    page: 1,
    currentKeyframe: 0
};

const mutations = {
    [types.SET_PAGE](state, page){
        state.page = page;
        state.currentKeyframe = 0;
    },
    [types.NEXT_KEYFRAME](state, page){
        //todo
        state.currentKeyframe++;

    },
    [types.NEXT_PAGE](state){
        state.page++;
        state.currentKeyframe = 0;
      //  router.push(state.page)


    },
    [types.PREV_PAGE](state){
        state.page > 1 ? state.page-- : null;
        state.currentKeyframe = 0;
    },
};

const getters = {
    page: state => state.page,
    currentKeyframe: state => state.currentKeyframe,
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: true
})