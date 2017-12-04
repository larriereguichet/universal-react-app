import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';

const rootReducer = combineReducers({
  router,
  counter,
});

export const getCounter = state => state.counter;

export default rootReducer;
