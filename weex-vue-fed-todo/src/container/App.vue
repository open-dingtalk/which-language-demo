<template>
  <div class="app-container">
    <router-view style="flex:1;"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'root'
  }
</script>

<style>
  .app-container{
    background-color: #fff;
  }
</style>
