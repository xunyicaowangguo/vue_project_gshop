<template>
  <div id="goodContainer">
    <div class="leftContainer">
        <ul class="navList" ref="leftUl">
              <li @click="changeNavIndex(index)" :class="{active: navIndex === index}" v-for="(good,index) in goods" :key="index">{{good.name}}</li>
        </ul>
    </div>
    <div class="rightContainer">
      <div class="foods-wrapper">
        <ul ref="rightUl">
          <li class="food-list-hook" v-for="(good,index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food,index) in good.foods" :key="index">
                <div class="icon">
                  <img width="57" height="57"
                       :src="food.image">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <ShopCart/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import CartControl from '../../../components/CartControl/CartControl'
  import ShopCart from '../../../components/ShopCart/ShopCart'
  import BScroll from 'better-scroll'
  export default {
    components:{
        CartControl,
        ShopCart,
    },
    data(){
        return{
            tops: [],
            scrollY: 0,
        }
    },
    mounted(){
        if(this.goods){
            this._initScroll()
            this._initTops()
        }
    },
    computed:{
      ...mapState({
        goods: state => state.shop.shopDatas.goods
      }),
      navIndex(){
          let {tops,scrollY} = this
          let index = tops.findIndex((top,index) => scrollY >= tops[index] && scrollY < tops[index+1] )
          if(this.leftScroll && index !== this.index){
              this.index = index
              this.leftScroll.scrollToElement(this.$refs.leftUl.children[index])
          }
          return index
      }
    },
    methods:{
        _initScroll(){
          if(this.leftScroll || this.rightScroll){  //之前生成过BScroll的实例
              this.leftScroll.refresh() //重新刷新当前的实例，重新计算content内容的高度/宽度
              this.rightScroll.refresh()  //重新刷新当前的实例
          }else{
            this.leftScroll = new BScroll('.leftContainer',{
                scrollY: true,  //纵向滑动
                click: true,
            })
            this.rightScroll = new BScroll('.rightContainer',{
                scrollY: true,  //纵向滑动
                probeType: 2,
                click: true,
            })

            //绑定scroll事件
            this.rightScroll.on('scroll',({x,y}) => {
                this.scrollY = Math.abs(y)
            })

            this.rightScroll.on('scrollEnd',({x,y}) => {
                this.scrollY = Math.abs(y)
            })
          }
        },
        _initTops(){
            let lis = Array.from(this.$refs.rightUl.children)
            let tops = []
            let top = 0
            tops.push(top)
            lis.reduce((pre,liItem) => {
                pre += liItem.clientHeight
                tops.push(pre)
                return pre
            },top)
            this.tops = tops
        },
        changeNavIndex(index){
            // console.log(event);
            //this.navIndex = index //no Setter
            this.scrollY = this.tops[index]
            this.rightScroll.scrollTo(0,-this.scrollY,500)
        }
    },
    watch:{
        goods(){
            this.$nextTick(() => {
                this._initScroll()
                this._initTops()
            })
        }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../../common/stylus/mixins.styl"

    #goodContainer
        display flex
        overflow hidden
        /* vh, vw 视口单位 1vh=1%视口高度 */
        /* calc可以动态计算高度，宽度*/
        height calc(100vh - 224px)
        .leftContainer
            width 80px
            background #f3f5f7
            .navList
                li
                    width 100%
                    height 50px
                    text-align center
                    line-height 50px
                    position relative
                    &.active
                        background #ffffff
                        color $green
                    &:after
                        content ''
                        display block
                        width 80%
                        height 1px
                        background rgba(7,17,27,0.1)
                        position absolute
                        left 10%
                        bottom 0

        .rightContainer
            width 295px
            // background #ccc 
            .foods-wrapper
                flex: 1
                .title
                    padding-left: 14px
                    height: 26px
                    line-height: 26px
                    border-left: 2px solid #d9dde1
                    font-size: 12px
                    color: rgb(147, 153, 159)
                    background: #f3f5f7
                .food-item
                    display: flex
                    margin: 18px
                    padding-bottom: 18px
                    bottom-border-1px(rgba(7, 17, 27, 0.1))
                    &:last-child
                        border-none()
                        margin-bottom: 0
                    .icon
                        flex: 0 0 57px
                        margin-right: 10px
                    .content
                        flex: 1
                        .name
                            margin: 2px 0 8px 0
                            height: 14px
                            line-height: 14px
                            font-size: 14px
                            color: rgb(7, 17, 27)
                        .desc, .extra
                            line-height: 10px
                            font-size: 10px
                            color: rgb(147, 153, 159)
                        .desc
                            line-height: 12px
                            margin-bottom: 8px
                        .extra
                            .count
                                margin-right: 12px
                        .price
                            font-weight: 700
                            line-height: 24px
                            .now
                                margin-right: 8px
                                font-size: 14px
                                color: rgb(240, 20, 20)
                            .old
                                text-decoration: line-through
                                font-size: 10px
                                color: rgb(147, 153, 159)
                        .cartcontrol-wrapper
                            position: absolute
                            right: 0
                            bottom: 12px



</style>
