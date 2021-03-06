import * as types from './types';

export const setPage = ({commit}, page) => {
    commit(types.SET_PAGE, page);
};

export const nextKeyframe = ({commit}) => {
    commit(types.NEXT_KEYFRAME);
};

export const nextPage = ({commit}) => {
    commit(types.NEXT_PAGE);
};

export const prevPage = ({commit}) => {
    commit(types.PREV_PAGE);
};