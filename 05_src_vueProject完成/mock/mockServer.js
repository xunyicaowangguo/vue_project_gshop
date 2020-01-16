import Mock from 'mockjs'
import shopDatas from './data.json'

//商家数据接口
Mock.mock('/api/getShopDatas',{code: 0, data: shopDatas})