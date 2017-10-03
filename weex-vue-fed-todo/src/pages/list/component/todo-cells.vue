<template>
  <div>
    <div class="no-more" v-if="todoList.length === 0">
      <image class="no-more-image" src="https://gw.alicdn.com/tfs/TB1SprZRXXXXXbnapXXXXXXXXXX-32-32.png"></image>
      <text class="no-more-text">暂无数据</text>
    </div>
    <list class="app-todo-list" v-else>
      <cell class="app-todo-item" v-for="(item,index) in todoList" :key="item.id">
        <div
          :class="['todo-item', item.check ? 'todo-check' : 'todo-no-check']"
        >
          <div
            class="todo-text"
            @click="completeTask(item)"
          >
            <text
              :class="[item.check ? 'todo-text-check' : 'todo-text-no-check']"
            >{{ item.text }}</text>
          </div>
          <div
            class="todo-remove-box"
            @click="removeTask(index)"
          >
            <image class="todo-remove-image" src="https://gw.alicdn.com/tfs/TB1D.3fRXXXXXbMXpXXXXXXXXXX-32-32.png"></image>
          </div>
        </div>
      </cell>
    </list>
  </div>

</template>

<script >
  import { toast, confirm } from '../../../lib/util.js'
  import { setItem } from '../../../lib/storage.js';

  export default {
    name: 'todo-cells',
    props: {
      todoList: Array,
      userId: String
    },
    data (){
      return {};
    },
    methods: {
      completeTask(item){
        item.check = item.check === 0 ? 1 : 0;
        setItem(this.userId,this.todoList);
      },
      removeTask(index){
        confirm('really delete ?',(result) => {
          if (result === 'OK'){
            this.todoList.splice(index,1);
            setItem(this.userId,this.todoList);
          }
        });
      }
    }
  }
</script>

<style scoped>
  .todo-num{
    color: red;
  }
  .no-more{
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .no-more-text{
    font-size: 28px;
  }
  .no-more-image{
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  .app-todo-list{
    width: 750px;
    height: 800px;
  }
  .app-todo-item{
    width: 750px;
    justify-content: center;
    align-items: center;
  }
  .todo-item{
    width: 600px;
    background-color: #fff;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    flex-direction: row;
  }
  .todo-remove-box{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .todo-remove-image{
    width: 32px;
    height: 32px;
  }
  .todo-no-check{
    border-bottom-color: #999;
    border-bottom-style: solid;
    border-bottom-width: 5px;
  }
  .todo-check{
    border-bottom-color: #42b983;
    border-bottom-style: solid;
    border-bottom-width: 5px;
  }
  .todo-text{
    width: 550px;
  }
  .todo-text-check{
    text-decoration: line-through;
  }
  .todo-text-no-check{
    text-decoration: none;
  }
</style>
