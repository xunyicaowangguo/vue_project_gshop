import {
    getAddress,
    getCategorys,
    getShopList,
} from '../api'

import {
    SAVE_ADDRESS,
    SAVE_CATEGORY,
    SAVE_SHOPLIST,
} from './mutations_types'

export default {
    async getAddressAction({commit}){
        let result = await getAddress(40.10038,116.36867)
        // if(result.code === 0){
        //     commit(SAVE_ADDRESS,result.data)
        // }
        // !!转换成布尔值
        !!(result.code === 0) && commit(SAVE_ADDRESS,result.data)
    },
    async getCategoryAction({commit}){
        let result = await getCategorys()
        // console.log(result);
        !!(result.code === 0) && commit(SAVE_CATEGORY,result.data)
    },
    async getShopListAction({commit}){
        let result = await getShopList()
        !!(result.code === 0) && commit(SAVE_SHOPLIST,result.data)
    },
}