import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router: router
  router,
  render: h => h(App)
})

// 获取router信息
console.log('router=' + router);
