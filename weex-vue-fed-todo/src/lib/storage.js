import dingtalk from 'weex-dingtalk';
import { toast } from './util.js';

export function getItem (name,cb){
  const date = new Date();
  dingtalk.ready(function(){
    dingtalk.apis.util.domainStorage.getItem({
      name: name,
      onSuccess (res){
        const value = res.value;
        if (!value){
          if (typeof cb === 'function'){
            cb(1,value);
          }
          return;
        }
        if (typeof cb === 'function'){
          try {
            let item = JSON.parse(value);
            cb(null, item);
          }catch(e){
            cb(e,res);
          }
        }
      }
    });
  });
}

export function clearItems (){
  dingtalk.ready(function(){
    dingtalk.apis.util.domainStorage.clearItems({});
  });
}

export function removeItem (name){
  dingtalk.ready(function(){
    dingtalk.apis.util.domainStorage.removeItem({
      name: name
    });
  });
}

export function setItem (name,val){
  dingtalk.ready(function(){
    dingtalk.apis.util.domainStorage.setItem({
      name: name,
      value: JSON.stringify(val)
    });
  });
}
