import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';

export default function configureStore(initialState = {},history) {
  const store = createStore(
    makeRootReducer(),
    initialState,
    applyMiddleware(thunk, routerMiddleware(history))
  );
  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }

  return store;
}
