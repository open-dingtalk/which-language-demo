import { combineReducers } from 'redux';
import todoReducer from './todo.js';

//combine所有reducer为一个根reducer
const rootReducer = combineReducers({
  todoReducer
});

export default rootReducer;
