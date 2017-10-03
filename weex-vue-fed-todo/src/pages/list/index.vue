<template>
  <div class="app-wrapper">
    <todo-user :user-info="userInfo"></todo-user>
    <todo-cells :todo-list="todoList" :user-id="userId"></todo-cells>
  </div>
</template>

<script>

  import { setRight, removeRightEvent,toast } from '../../lib/util.js';
  import { getUserId, getUserInfo } from '../../lib/request.js';
  import { getItem, clearItems } from '../../lib/storage.js';
  import TodoCells from './component/todo-cells.vue';
  import TodoUser from './component/todo-user.vue';

  export default {
    name: 'todoapp',
    components: {
      TodoCells,
      TodoUser
    },
    data (){
      return {
        userId: '',
        todoList: [],
        userInfo: {
          avatar: '',
          name: '',
          mobile: ''
        }
      };
    },
    created (){
      const right = {
        show: true,
        text: 'add',
        control: true
      };
      setRight(right,this.gotoAddPage);
      this.$watch('userId',() => {
        this.fetchUserInfo();
        this.fetchTodoList();
      });
    },
    mounted (){
      this.fetchUserId();
    },
    methods: {
      gotoAddPage (e){
        this.$router.push({name:'add',params:{userId:this.userId}});
      },
      fetchUserId (){
        getUserId().then((res) => {
          this.userId = res.userid;
        }).catch((err) => {
          toast('fetch user id error : ' + JSON.stringify(err));
        });
      },
      fetchUserInfo (){
        getUserInfo(this.userId).then((res) => {
          const { avatar, name, mobile } = res;
          this.userInfo = {
            avatar,
            name,
            mobile
          }
        }).catch((err) => {
          toast('fetch user info error : ' + JSON.stringify(err));
        });
      },
      fetchTodoList (){
        getItem(this.userId,(err,res) => {
          if (err || err === 1){
            return;
          }
          this.todoList = res;
        });
      }
    },
    beforeDestroy (){
      removeRightEvent(this.gotoAddPage);
    }
  }
</script>

<style scoped>
  .app-wrapper{
    width: 750px;
    background-color: #f8f8f8;
  }

</style>
