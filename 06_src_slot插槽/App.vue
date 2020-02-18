<template>
  <div>
    <h1>App 组件</h1> 
    <hr/>
    <Home>Save</Home>
    <hr/>
    <Login>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </Login>
  </div>
</template>

<script>
  import Home from './components/Home/Home'
  import Login from './components/Login/Login'
  export default {
    components:{
      Home,
      Login,
    }
  }
</script>

<style scoped>

 
</style>
