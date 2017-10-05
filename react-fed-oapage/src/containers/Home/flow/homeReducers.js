import { HOME_SYNC_DEFAULT,HOME_ASYNC_DEFAULT,HOME_FETCH_USERINFO } from './constants';

const initState = {
  name: '',
  asyncName: '...',
  userInfo: {}
};

export default function homeReducers(state = initState, action){
  const { type, payload } = action;
  switch (type){
    case HOME_SYNC_DEFAULT:
      return { ...state, name: payload.data }
    case HOME_ASYNC_DEFAULT:
      return { ...state, asyncName: payload.data}
    case HOME_FETCH_USERINFO:
      return { ...state, userInfo: payload.data}  
    default:
      return { ...state}
  }
}