import {getUserInfo,getUserId} from '../../../../util/lib/request';
import { toast } from '../../../../util/lib/util';

export const INIT_LIST = 'INIT_LIST';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const MODIFY_ITEM = 'MODIFY_ITEM';
export const GET_USER_INFO = 'GET_USER_INFO';

export function initList() {
  return { type: INIT_LIST };
}
export function deleteItem(id) {
  return { type: DELETE_ITEM, id };
}
export function addItem(obj) {
  return { type: ADD_ITEM, obj };
}
export function modifyItem(obj) {
  return { type: MODIFY_ITEM, obj };
}

function userInfoData(data){
  return {
    type: GET_USER_INFO,
    payload: {
      data:data
    }
  };
}

export function fetchUserInfo(){
  return function(dispatch){
    /*
      模拟数据
      {
        name: 'icepy',
        avatar: 'https://avatars3.githubusercontent.com/u/3321837?v=4&u=474bf7c009911c87a36679fe18ab6e5aba26d9b7&s=400'
      }
    */
    getUserId().then((res) =>{
      getUserInfo(res.userid).then((res) => {
        const { avatar, name, mobile } = res;
        dispatch(userInfoData({
          avatar,
          name,
          mobile
        }));
      }).catch((err) => {
        toast('fetch user info error : ' + JSON.stringify(err));
      });
    }).catch((err) => {
      toast('fetch user id error : ' + JSON.stringify(err));
    });
  }
}

