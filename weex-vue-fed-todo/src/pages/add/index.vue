<template>
  <div class="app-todo-add">
    <div class="app-todo-texttarea">
      <textarea
        class="app-todo-input"
        placeholder="enter your task text !!!"
        autofocus="true"
        rows="1"
        @input="inputTask"
      ></textarea>
    </div>
    <div class="app-todo-add-operation">
      <div class="app-todo-confirm" @click="enterTask">
        <text class="operation-text">confirm</text>
      </div>
      <div class="app-todo-cancel" @click="goBack">
        <text class="operation-text">cancel</text>
      </div>
    </div>
  </div>
</template>

<script>
  import { setRight,toast, getUid } from '../../lib/util.js';
  import { getItem, setItem } from '../../lib/storage.js';
  export default {
    name: 'add',
    data (){
      return {
        taskText:'',
        userId: ''
      }
    },
    created(){
      setRight({
        show: false
      });
    },
    mounted(){
      this.userId = this.$route.params.userId;
    },
    methods: {
      inputTask (e){
        this.taskText = e.value;
      },
      goBack (){
        this.$router.go(-1)
      },
      enterTask (){
        console.log(this.userId);
        if (this.taskText.length === 0){
          toast('enter text is empty');
          return;
        } else if (!this.userId){
          toast('Not Login');
        } else {
          const vm = this;
          const meta = {
            date: new Date().getTime(),
            text: this.taskText,
            check: 0,
            id: getUid()
          }
          getItem(this.userId,function(e,res){
            let cells;
            console.log(e);
            if (e === 1){
              cells = [];
            }
            if (!e){
              cells = res;
            }
            cells.push(meta);
            setItem(vm.userId,cells);
            vm.goBack();
          });
        }
      }
    }
  }
</script>

<style scoped>
  .app-todo-add{
    width: 750px;
    flex-direction: column;
    align-items: center;
    background-color: #f8f8f8;
  }
  .app-todo-texttarea{
    margin-top: 55px;
  }
  .app-todo-input{
    width: 550px;
    height: 80px;
    border-bottom-color: #fff;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-top-color: #fff;
    border-top-style: solid;
    border-top-width: 1px;
    border-left-color: #fff;
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: #fff;
    border-right-style: solid;
    border-right-width: 1px;
    font-size: 28px;
    padding-left: 5px;
    padding-top: 20px;
    background-color: #fff;
  }
  .app-todo-add-operation{
    width: 550px;
    height: 80px;
    margin-top: 35px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .app-todo-confirm{
    width: 270px;
    height: 80px;
    background-color: #42b983;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
  }
  .app-todo-cancel{
    width: 270px;
    height: 80px;
    background-color: #e06c75;
    justify-content: center;
    align-items: center;
  }
  .operation-text{
    font-size: 30px;
    color: #fff;
  }
</style>
