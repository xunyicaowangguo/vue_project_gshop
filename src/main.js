import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
//引入路由器
import router from './router'
//引入头部组件
import GshopHeader from './components/GshopHeader/GshopHeader.vue'
import store from './store'

Vue.config.productionTip = false

Vue.component('GshopHeader',GshopHeader)

new Vue({
  render: h => h(App),
  //2.安装路由器
  router,
  store
}).$mount('#app')

