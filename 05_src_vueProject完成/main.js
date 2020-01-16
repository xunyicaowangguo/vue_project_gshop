import Vue from 'vue'
import App from './App.vue'
//引入移动端适配库
import 'lib-flexible/flexible'
//引入mint-ui
import { Button } from 'mint-ui';
import './mock/mockServer'


//引入veeValidate
import './veeValidate'
//引入路由器
import router from './router'
//引入头部组件
import GshopHeader from './components/GshopHeader/GshopHeader.vue'
//引入vuex的store
import store from './store'
//引入请求函数
import * as API from './api'


//控制台保持干净
Vue.config.productionTip = false
//vue原型上挂载请求函数
Vue.prototype.$API = API
//全局注册组件
Vue.component('GshopHeader',GshopHeader)
//引入mint-ui的button
Vue.component(Button.name, Button); 


new Vue({
  render: h => h(App),
  //2.安装路由器
  router,
  store
}).$mount('#app')

