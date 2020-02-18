import Mock from 'mockjs'
import shopDatas from './data'

//商家数据接口
Mock.mock('/api/getShopDatas',{code: 0, data: shopDatas})