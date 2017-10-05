import { HOME_SYNC_DEFAULT,HOME_ASYNC_DEFAULT } from './constants';

const initState = {
  name: '',
  asyncName: '...'
};

export default function homeReducers(state = initState, action){
  const { type, payload } = action;
  switch (type){
    case HOME_SYNC_DEFAULT:
      return { ...state, name: payload.data }
    case HOME_ASYNC_DEFAULT:
      return { ...state, asyncName: payload.data}
    default:
      return { ...state}
  }
}