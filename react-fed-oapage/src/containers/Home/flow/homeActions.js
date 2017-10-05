import { HOME_SYNC_DEFAULT,HOME_ASYNC_DEFAULT } from './constants';

export const getDefault = (params) => {
  return {
    type: HOME_SYNC_DEFAULT,
    payload: {
      data: 'wower'
    }
  }
}

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