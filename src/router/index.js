import Vue from 'vue'
import vueRouter from 'vue-router'
import routes from './routes'
import VueRouter from 'vue-router'


Vue.use(vueRouter)


/*
export default new VueRouter({
    routes
})
*/

//1.生成路由器
const router = new VueRouter({
    routes
})

export default router