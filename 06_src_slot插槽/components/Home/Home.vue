<template>
  <div>
      <h2>Home 组件</h2>
      <button type="submit">
        <slot>submit</slot>
      </button>
      <Login>
        <h1>hello hai</h1>
      </Login>
  </div>
</template>

<script>
  import Login from '../Login/Login'
  export default {
    components:{Login}
  }
</script>

<style scoped>

 
</style>
