<template>
  <div class="wrapper">
    <text class="title" v-on:click="getClick">{{ link }}</text>
    <text class="subtitle" v-on:click="getShare">Hello icepy,i love your playground !!!</text>
  </div>
</template>
<script>
  import { setRight,toast, setTitle,share } from '../../lib/util.js';
  
  export default {
    name: 'home',
    data (){
      return {
        link: 'Going DingTalk Todo List Application'
      }
    },
    created (){
      setRight({
        show: false
      });
      setTitle('Todo');
    },
    mounted (){

    },
    methods: {
      getClick: function(){
        this.$router.push('list');
      },
      getShare: function(){
        share();
      }
    }
  }
</script>
<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 750px;
    background-color: #f8f8f8;
  }
  .title {
    font-size: 60px;
    width: 750px;
    color: #505050;
    text-align: center;
  }
  .subtitle {
    width: 750px;
    font-size: 30px;
    color: #AAAAAA;
    text-align: center;
    margin-top: 20px;
  }
</style>
