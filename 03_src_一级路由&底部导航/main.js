import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'

import 'lib-flexible/flexible'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //2.安装路由器
  router,
}).$mount('#app')

