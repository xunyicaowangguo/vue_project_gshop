<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="iconfont iconjianhao3" v-show="food.count" @click="changeFoodCount(false)"></div>
        </transition>
        <div class="cart-count" v-show="food.count">{{food.count}}</div>
        <div class="iconfont iconjiahao2" @click="changeFoodCount(true)"></div>
    </div>
</template>

<script>
  export default {
      props:{
          food:{
              required: true,
              type: Object,
          }
      },
      methods:{
          changeFoodCount(isAdd){
              this.$store.dispatch('changeFoodCount',{isAdd,food:this.food})
          }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .cartcontrol
        font-size: 0
        .iconjianhao3
            padding 4px
            color $green
            &.move-enter,&.move-leave-to
                transform translateX(20px) rotate(180deg)
                opacity 0
            &.move-enter-active,&.move-leave-active
                transition all .5s
        .cart-count
            display: inline-block
            width: 14px
            text-align: center
            font-size: 14px
            color: rgb(147, 153, 159)
            margin 0 8px
        .iconjiahao2
            padding: 4px
            color $green
        .iconfont
            display: inline-block
            border 2px solid $green
            border-radius 50%
            font-size 10px
    
</style>
