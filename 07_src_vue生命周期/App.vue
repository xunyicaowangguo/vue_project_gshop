<template>
  <div id="componentContainer">
    <div class="tabs">
      <div class="tab" @click="comName='Home'">Home组件</div>
      <div class="tab" @click="comName='Msite'">Msite组件</div>
    </div>
    <keep-alive>
      <component :is="comName"></component>
    </keep-alive>
  </div>
</template>

<script>
  import Home from './components/Home/Home'
  import Msite from './components/Msite/Msite'
  export default {
    components:{
      Home,
      Msite,
    },
    data(){
      return{
        comName:'Home'
      }
    }
  }
</script>

<style scoped>
  #componentContainer .tabs{
    display: flex;
    position: fixed;
    width: 100%
  }
  #componentContainer .tabs .tab{ 
      width: 50%;
      height: 80px;
      line-height: 80px;
      text-align: center;
      border: 1px solid #000;
      background-color: aquamarine
    }
 
</style>
