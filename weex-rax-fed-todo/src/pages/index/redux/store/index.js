'use strict';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from './middlewares'

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunkMiddleware,
    logger
  )
)(createStore);
export default createStoreWithMiddleware;
