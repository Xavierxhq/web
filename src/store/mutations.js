import types from './types'
import imgUrl from '@/assets/logo.png'

export default {
  [types.LOGIN](state, user) {
    state.user = user
  },

  [types.LOGOUT](state, user) {
    state.user.user = user
  },

  [types.GET_RECOMMEND_LIST](state, recomend_ls) {
    state.recomend_ls = []
    recomend_ls.forEach(item => {
      state.recomend_ls.push(item)
    })
  },

  [types.GET_LIKE_LIST](state, like_ls) {
    state.like_ls = []
    like_ls.forEach(item => {
      state.like_ls.push(item)
    })
  }
}
