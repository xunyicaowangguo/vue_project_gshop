<template>
  <div id="msiteContainer">
    <h1>Msite 组件</h1>
    <hr/>
    <ul class="list">
      <li @click="navIndex = index" :class="{active:navIndex===index}" v-for="(item,index) in 100" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        navIndex:0,
        scrollTop:0
      }
    },
    mounted(){
      console.log('msite-------mounted');
      window.addEventListener('scroll',()=>{
        let scrollTop = document.documentElement.scrollTop
        this.scrollTop = scrollTop
        console.log(this.scrollTop)
      })
    },
    activated(){
      console.log('msite-------activated')
      sessionStorage.getItem('scrollTop') && (document.documentElement.scrollTop = sessionStorage.getItem('scrollTop'))
      // sessionStorage.getItem('navIndex') && (this.navIndex = sessionStorage.getItem('navIndex'))
    },
    deactivated(){
      console.log('msite-------deactivated');
      // let scrollTop = document.documentElement.scrollTop
      // this.scrollTop = scrollTop
      // console.log(this.scrollTop)
      sessionStorage.setItem('scrollTop',this.scrollTop)
      // sessionStorage.setItem('navIndex',this.navIndex)
    },

  }
</script>

<style scoped>
#msiteContainer{
  padding-top: 100px;
}
#msiteContainer .list li{
  margin-top: 20px; 
  width: 100%;
  height: 60px;
}
#msiteContainer .list li.active{
  color: red;
}
 
</style>
