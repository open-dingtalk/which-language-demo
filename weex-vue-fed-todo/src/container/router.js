import VueRouter from 'vue-router';
import dingtalk from 'weex-dingtalk';
import journey from 'weex-dingtalk-journey';
import { toast,setLeft } from '../lib/util.js';
import { jsApiOAuth } from '../lib/request.js';
import HomePage from '../pages/home/index.vue';
import TodoAppListPage from '../pages/list/index.vue';
import AddCellPage from '../pages/add/index.vue';

const routes = [
  {
    path:'/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/list',
    name: 'list',
    component: TodoAppListPage
  },
  {
    path: '/add',
    name: 'add',
    component: AddCellPage
  }
];

dingtalk.error(function(err){
  console.log(JSON.stringify(err))
  toast('Error : ' + JSON.stringify(err));
});

const { env } = journey;

export default function Router(Vue){
  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: routes
  });
  const left = {
    show: true,
    control: true,
    text: '返回'
  }
  const backHandler = function(e){
    if (env.isWeb){
      e.preventDefault();
    }

    router.go(-1);
  }
  setLeft(left, backHandler);
  // jsApiOAuth().then(function(){
  //   console.log('签名完成');
  // }).catch(function(err){
  //   console.log(JSON.stringify(err))
  // });
  return {
    router
  }
}
