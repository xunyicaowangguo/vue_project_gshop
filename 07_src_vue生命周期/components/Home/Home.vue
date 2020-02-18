<template>
  <div id="container">
      <h2>Home 组件</h2>
      <hr/>
  </div>
</template>

<script>
  export default {
    mounted(){
      console.log('home-------mounted');
    },
    activated(){
      console.log('home-------activated');
    },
    deactivated(){
      console.log('home-------deactivated');
    },
  }
</script>

<style scoped>
  #container{
    padding-top: 100px;
  }
 
</style>
