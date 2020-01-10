import {
    SAVE_ADDRESS,
    SAVE_CATEGORY,
    SAVE_SHOPLIST,
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
}