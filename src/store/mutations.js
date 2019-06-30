import types from './types'
import imgUrl from '@/assets/logo.png'

export default {
  [types.LOGIN](state, user) {
    state.user = user
  },

  [types.LOGOUT](state, user) {
    state.user.user = user
  },

  [types.GET_RECOMMEND_LIST_1](state, recomend_ls) {
    state.recomend_ls_1 = []
    recomend_ls.forEach(item => {
      state.recomend_ls_1.push(item)
    })
  },

  [types.GET_RECOMMEND_LIST_2](state, recomend_ls) {
    state.recomend_ls_2 = []
    recomend_ls.forEach(item => {
      state.recomend_ls_2.push(item)
    })
  },

  [types.GET_RECOMMEND_LIST_3](state, recomend_ls) {
    state.recomend_ls_3 = []
    recomend_ls.forEach(item => {
      state.recomend_ls_3.push(item)
    })
  },

  [types.GET_RECOMMEND_LIST_4](state, recomend_ls) {
    state.recomend_ls_4 = []
    recomend_ls.forEach(item => {
      state.recomend_ls_4.push(item)
    })
  },

  [types.GET_LIKE_LIST](state, like_ls) {
    state.like_ls = []
    like_ls.forEach(item => {
      state.like_ls.push(item)
    })
  },

  [types.GET_HISTORY_LIST](state, history_ls) {
    state.history_ls = []
    history_ls.forEach(item => {
      state.history_ls.push(item)
    })
  },
}
