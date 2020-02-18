import Vue from 'vue'
import App from './App.vue'

//控制台保持干净
Vue.config.productionTip = false

new Vue({
  render: h => h(App),

}).$mount('#app')

