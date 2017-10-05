import { HOME_SYNC_DEFAULT,HOME_ASYNC_DEFAULT,HOME_FETCH_USERINFO } from './constants';
import { jsApiOAuth, getUserId, getUserInfo} from '../../../common/ding-service';
import { OPENAPIHOST } from '../../../common/env';

export const getDefault = (params) => {
  return {
    type: HOME_SYNC_DEFAULT,
    payload: {
      data: 'wower'
    }
  }
}

const setUserInfo = data => ({
  type: HOME_FETCH_USERINFO,
  payload: {
    data: data
  }
})

export const getAsyncDefault = (params) => (dispatch) => {
  setTimeout(() => {
    dispatch((() => {
      return {
        type: HOME_ASYNC_DEFAULT,
        payload: {
          data: 'icepy'
        }
      }
    })())
  },2000)
}

function fetchUserId(){
  return function(cb){
    const getUserIdRequest = {
      url: OPENAPIHOST + '/api/get-user-info'
    }
    getUserId(getUserIdRequest).then( (response) => {
      const data = response.data;
      cb(null,data.userid);
    }).catch((error) => {
      alert('获取userid error ：' + JSON.stringify(error));
      cb(error);
    })
  }
}

function fetchUserInfos(userid){
  return function(cb){
    const getUserInfoRequest = {
      url: OPENAPIHOST + '/api/get',
      params: {
          userid: userid
      }
    };
    getUserInfo(getUserInfoRequest).then( (response) => {
      cb(null,response.data);
    }).catch((error) => {
      alert('获取用户信息 error：' + JSON.stringify(error));
      cb(error);
    });
  }
}

function run(task){
  let _task = task();
  let res = _task.next();
  while(!res.done){
    if (typeof res.value === 'function'){
      res.value((err,data) => {
        if (err){
          res = _task.next(err);
        } else {
          res = _task.next(null,data);
        }
      });
    } else {
      res = _task.next(res.value);
    }
  }
}

export const fetchUserInfo = () => (dispatch) => {
  run(function *(){
    let userid = yield fetchUserId();
    let userInfo = yield fetchUserInfos(userid);
    dispatch(setUserInfo(userInfo));
  });
}

export const fetchJSAPIOAuth = () => (dispatch) => {
  const signRequest = {
    url: OPENAPIHOST + '/api/jsapi-oauth',
    params: {
        href: location.href
    }
  };
  jsApiOAuth(signRequest).then( () => {
    alert('JS API 权限校验成功');
  }).catch((error) => {
    alert('JS API 权限校验失败 error : ' + JSON.stringify(error));
  })
} 