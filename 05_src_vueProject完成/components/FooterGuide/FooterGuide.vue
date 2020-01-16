<template>
  <div id="footerContainer">
    <div @click="goPath('/msite')" :class="{active: $route.path === '/msite'}" class="guideItem">
      <i class="iconfont iconhome"></i>
      <span>首页</span>
    </div>
    <div @click="goPath('/search')" :class="{active: $route.path === '/search'}" class="guideItem">
      <i class="iconfont iconsousuo"></i>
      <span>搜索</span>
    </div>
    <div @click="goPath('/order')" :class="{active: $route.path === '/order'}" class="guideItem">
      <i class="iconfont iconsingle"></i>
      <span>订单</span>
    </div>
    <div @click="goPath('/profile')" :class="{active: $route.path === '/profile'}" class="guideItem">
      <i class="iconfont iconwode1"></i>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'footerGuide',
    methods: {
      goPath(path){
        //跳转至指定的路由路径
        //编程式路由导航：$router
        /*
          $router 与 $route 的区别
          $router：路由器对象，包含路由跳转的方法 push()/replace()
          $route: 路由对象，包含当前路径下所有路由信息(path,params,meta,query)
        */
       // this.$router.push(path)
       path !== this.$route.path && this.$router.push(path)
      //  if(path !== this.$route.path){
      //    this.$router.push(path)
      //  }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl";

  #footerContainer
    display flex
    top-border-1px(#eee)
    position fixed
    left 0
    bottom 0
    width 100%
    height 50px
    box-sizing border-box
    background-color #fff
    .guideItem
      width 25%
      height 50px
      flex-direction column
      text-align center
      display flex
      &.active
        color $green
      .iconfont
        font-size 22px
        line-height 30px
      span 
        font-size 16px

 
</style>
