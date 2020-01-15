<template>
  <div id="shopContainer">
    <ShopHeader/>
    <div class="tabs">
      <div class="tab-item">
        <router-link to="/shop/goods">订餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/rating">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {SAVE_SHOPDATAS,SAVE_CARTSHOPS} from '../../store/mutations_types'
  import ShopHeader from '../../components/ShopHeader/ShopHeader'
  export default {
    components:{ShopHeader},
    computed:{
      ...mapState({
        shopDatas: state => state.shop.shopDatas
      })
    },
    async mounted(){
      // let result = await this.$API.getShopDatas()
      // console.log(result);
      
      //获取商家完整信息
      // this.$store.dispatch('getShopDatasAction')

      //解决vuex刷新页面数据丢失问题
      //从sessionStorage读取数据
      let shopDatas = JSON.parse(sessionStorage.getItem('shopDatas'))
      if(shopDatas){
        //1.将读取到的数据存入vuex中
        this.$store.commit(SAVE_SHOPDATAS,shopDatas)
        //计算最新的购物车数据,food.count>0
        let cartShops = shopDatas.goods.reduce((pre,good)=>{
          pre.push(...good.foods.filter(food=>food.count>0))
          return pre
        },[])
        //cartShops存入vuex中S
        this.$store.commit(SAVE_CARTSHOPS,cartShops)
      }else{
        //分发action，发送请求获取数据
        this.$store.dispatch('getShopDatasAction')
      }
      //绑定unload事件，此事件在页面确定刷新但还没有真正刷新的时候，页面即将刷新之前执行
      window.addEventListener('unload',() => {
        //将最新的shopDatas存入sessionStorage
        sessionStorage.setItem('shopDatas',JSON.stringify(this.shopDatas))
      })
    },
    //页面刷新，组件会销毁，但来不及走beforeDestroy
    //beforeDestroy是vue的生命周期函数，浏览器刷新没有beforeDestroy
    beforeDestroy(){
      //将最新的shopDatas存入sessionStorage
      sessionStorage.setItem('shopDatas',JSON.stringify(this.shopDatas))
    },
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'

  #shopContainer
    .tabs
      display flex
      bottom-border-1px(#eee)
      .tab-item
        // width 33.33%
        flex 1
        text-align center
        height 40px
        line-height 40px
        font-size 16px
        a
          display block
          position relative
          &.router-link-active
            color $green
            &:after
              content ''
              display block
              height 4px
              width 40px
              background $green
              transform scaleY(0.5)
              position absolute
              bottom 0
              left 50%
              margin-left -20px 
</style>
