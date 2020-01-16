
//3.管理路由
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'

import Goods from '../pages/Shop/Goods/Goods.vue'
import Info from '../pages/Shop/Info/Info.vue'
import Rating from '../pages/Shop/Rating/Rating.vue'



export default [
    {
        path: '/msite',
        component: Msite,
        meta:{
            isFooterShow:true
        }
    },
    {
        path: '/search',
        component: Search,
        meta:{
            isFooterShow:true
        }
    },
    {
        path: '/order',
        component: Order,
        meta:{
            isFooterShow:true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta:{
            isFooterShow:true
        }
    },
    {
        path: '/login',
        component: Login,
        meta:{
            isFooterShow:false
        }
    },
    {
        path: '/shop',
        component: Shop,
        children:[
            {
                path: '/shop/goods',
                component: Goods,
            },
            {
                path: 'info',
                component: Info,
            },
            {
                path: '/shop/rating',
                component: Rating,
            },
            {
                path: '/',
                redirect: '/shop/goods',
            },
        ]
    },
    {
        path: '/',
        redirect: '/login'
    },
]