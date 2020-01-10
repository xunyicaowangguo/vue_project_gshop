<template>
    <section class="msite">
        <!--首页头部-->
        <!-- <header class="msite_header">
            <span class="header_search">
              <i class="iconfont icon-sousuo"></i>
            </span>
          <span class="header_title">
              <span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
            </span>
          <span class="header_login">
              <span class="header_login_text">登录|注册</span>
            </span>
        </header> -->
        <GshopHeader :title="address.name?address.name:'定位中...'">
          <span class="header_search" slot="left">
            <i class="iconfont iconsousuo"></i>
          </span>
          <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
          </span>
        </GshopHeader>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(category,index) in newCategorys" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(categoryItem,index) in category" :key="index">
                  <div class="food_container">
                    <img :src="`https://fuss10.elemecdn.com/${categoryItem.image_url}`">
                  </div>
                  <span>{{categoryItem.title}}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!--首页附近商家-->
        <ShopList/>
      </section>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import _ from 'lodash'
  import {mapState} from 'vuex'
  import ShopList from '../../components/ShopList/ShopList'
  export default {
    components:{
      ShopList
    },

    mounted(){
      this.$store.dispatch('getAddressAction')
      this.$store.dispatch('getCategoryAction')

      // new Swiper('.swiper-container',{
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },
      //   loop: true,
      // })
    },

    computed:{
      ...mapState({
        address: state => state.address,
        categorys: state => state.categorys,
      }),
      newCategorys(){
        return _.chunk(this.categorys, 8)
      }
    },

    watch:{
      //解决swiper滑动方式一
      categorys(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true,
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  @import '../../common/stylus/mixins.styl'
  .msite
    width 100%
    .msite_header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            height 100%
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        /deep/.swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>
