import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../common/reducers';

export default (initialState, middlewares = []) =>
  createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
