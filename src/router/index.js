import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Recommend from '@/components/Recommend'
import History from '@/components/History'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Recommend
    },
    {
      path: '/recomend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/history',
      name: 'History',
      component: History
    }
  ]
})
