import {
    SAVE_ADDRESS,
    SAVE_CATEGORY,
    SAVE_SHOPLIST,
    SAVE_USERINFO,
    SAVE_TOKEN,
    LOGOUT,
} from './mutations_types'

export default {
    [SAVE_ADDRESS] (state,address){
        state.address = address
    },
    [SAVE_CATEGORY] (state,categorys){
        state.categorys = categorys
    },
    [SAVE_SHOPLIST] (state,shopList){
        state.shopList = shopList
    },
    [SAVE_USERINFO] (state,userInfo){
        state.userInfo = userInfo
    },
    [SAVE_TOKEN] (state,token){
        state.token = token
    },
    [LOGOUT] (state){
        state.token = '',
        state.userInfo = {},
        localStorage.removeItem('token_key')
    },
}