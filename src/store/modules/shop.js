import Vue from 'vue'

import {
    SAVE_SHOPDATAS,
    ADD_FOOD_COUNT,
    DEL_FOOD_COUNT,
    CLEAR_CARTSHOPS,
    SAVE_CARTSHOPS,
} from '../mutations_types'

import {
    getShopDatas
} from '../../api'

const state = {
    shopDatas: {},//商家数据
    cartShops: [], //购物车的food
}

const mutations = {
    [SAVE_SHOPDATAS](state,shopDatas){
        state.shopDatas = shopDatas
    },
    [ADD_FOOD_COUNT](state,{food}){
        if(food.count > 0){
            food.count++
        }else{
            Vue.set(food,'count',1)
            state.cartShops.push(food)
        }
    },
    [DEL_FOOD_COUNT](state,{food}){
        if(food.count > 0){
            food.count--
            if(food.count === 0){
                state.cartShops.splice(state.cartShops.indexOf(food),1)
            }
        }
    },
    [CLEAR_CARTSHOPS](state){
        state.cartShops.forEach(food => food.count = 0)
        // state.cartShops.forEach(food => {food.count = 0})
        state.cartShops = []
    },
    [SAVE_CARTSHOPS](state,cartShops){
        state.cartShops = cartShops
    },
}

const actions = {
    async getShopDatasAction({commit}){
        let result = await getShopDatas()
        if(result.code === 0){
            commit(SAVE_SHOPDATAS,result.data)
        }  
    },
    changeFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(ADD_FOOD_COUNT,{food})
        }else{
            commit(DEL_FOOD_COUNT,{food})
        }
    }      
}

const getters = {
  // 计算一个数组： 包含所有food.count>的food
  // cartShops(state){ 性能较差，food.count每改变一次就会重新计算整个数组
  //   return state.shopDatas.goods.reduce((pre, good) => {
  //     console.log(pre, good);
  //     // 1. good.foods.filter(food => food.count > 0) 过滤出food.count>0d的数组
  //     pre.push(...good.foods.filter(food => food.count > 0))
  //     return pre
  //   }, [])
  // }
  
  totalCount(state){
    return state.cartShops.reduce((pre, food) => {
      return pre += food.count
    }, 0)
  },
  totalPrice(state){
    return state.cartShops.reduce((pre, food) => {
      return pre += food.count * food.price
    }, 0)
  }
}

export default {
    state,
    mutations,
    actions,
    getters
}