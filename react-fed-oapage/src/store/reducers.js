import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export const makeRootReducer = (asyncReducers) => (
  combineReducers({
    routing: routerReducer,
    ...asyncReducers
  })
);

export const injectReducers = (store, reducers) => {
  store.asyncReducers = {
    ...store.asyncReducers,
    ...reducers
  };
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
