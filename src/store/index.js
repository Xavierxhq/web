import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  user: {
  	id: 1,
  },
  userid: 0,
  alg: 1,
  common_history_ls: [],
  recomend_ls_1: [],
  recomend_ls_2: [],
  recomend_ls_3: [],
  recomend_ls_4: [],
  like_ls: [],
  history_ls: [],
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
