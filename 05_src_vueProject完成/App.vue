<template>
  <div id="container">
      <!-- 显示路由组件 -->
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.isFooterShow"/>
  </div>
</template>

<script>
  import {SAVE_USERINFO} from './store/mutations_types'
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'app',
    components: {FooterGuide},
    async mounted(){
      let result = await this.$API.autoLogin()
      // console.log(result);
      //用户信息存入vuex中
      this.$store.commit(SAVE_USERINFO,result.data)
    }
  }
</script>

<style scoped>

 
</style>
