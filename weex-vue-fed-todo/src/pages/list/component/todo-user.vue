<template>
  <div class="app-users">
    <div class="app-users-image-box" @click="goAdd">
      <image class="app-users-image" :src="userInfo.avatar"></image>
    </div>
    <div class="app-users-name-box">
      <text class="app-users-name">{{ userInfo.name }}</text>
    </div>
  </div>
</template>

<script>
  import { openUrl } from '../../../lib/util.js';
  export default {
    name: 'todo-user',
    props: {
      userInfo: Object
    },
    data (){
      return {};
    },
    mounted(){

    },
    methods: {
      goAdd(){
        //openUrl('https://github.com/icepy?dd_wx_tpl=http://30.27.108.21:8089/weex-dingtalk-dev.js');
      }
    }
  }
</script>

<style scoped>
  .app-users{
    width:750px;
    height: 136px;
    background-color: #fff;
    flex-direction: row;
    margin-bottom: 32px;
  }
  .app-users-image-box{
    width: 148px;
    height: 136px;
    justify-content: center;
    align-items: center;
  }
  .app-users-image{
    width: 100px;
    height: 100px;
    background-color: #f8f8f8;
  }
  .app-users-name-box{
    justify-content: center;
    align-items: center;
  }
  .app-users-name{
    font-size: 34px;
    color: #323334
  }
</style>
