<template>
  <div id="container">
      <!-- 显示路由组件 -->
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.isFooterShow"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'app',
    components: {FooterGuide}
  }
</script>

<style scoped>

 
</style>
