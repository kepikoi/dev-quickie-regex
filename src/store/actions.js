import * as types from './types';

export const setPage = ({commit}, page) => {
    commit(types.SET_PAGE, page);
    commit(types.CHANGE_PAGE);
};

export const nextPage = ({commit}) => {
    commit(types.NEXT_PAGE);
    commit(types.CHANGE_PAGE);
};

export const prevPage = ({commit}) => {
    commit(types.PREV_PAGE);
    commit(types.CHANGE_PAGE);
};