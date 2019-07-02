import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import Register from '@/components/Register'
import Home from '@/components/Home'
import Recommend from '@/components/Recommend'
import CommonHistory from '@/components/CommonHistory'
import History from '@/components/History'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register,
    },
    {
      path: '/home',
      // name: 'Home',
      component: Home,
      children: [
        {
          path: 'commonhistory',
          name: 'CommonHistory',
          component: CommonHistory
        },
        {
          path: 'recomend',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: 'history',
          name: 'History',
          component: History
        },
        {
          path: '',
          name: 'Default',
          component: Recommend
        },
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
})

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
})

export default router
