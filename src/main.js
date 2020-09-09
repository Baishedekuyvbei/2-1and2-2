/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 白金鑫
 * @Date: 2020-09-09 19:32:42
 * @LastEditors: 白金鑫
 * @LastEditTime: 2020-09-09 19:58:28
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './Mock'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
