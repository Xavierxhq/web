import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'


const http = axios.create({
  headers: {
    'Accept': 'application/json,text/plain',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Language': 'zh-CN',
  },
  baseURL: "http://localhost:5000/",
  timeout: 3000,
  withCredentials: false
})

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$Loading = iView.LoadingBar

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
