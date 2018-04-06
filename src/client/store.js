import { routerMiddleware } from 'react-router-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createLogger } from 'redux-logger';
import history from './history';
import configureStore from '../common/configureStore';

const middlewares = [];
const { NODE_ENV } = process.env;

if (NODE_ENV !== 'production' && NODE_ENV !== 'test') {
  middlewares.push(createLogger());
}
middlewares.push(routerMiddleware(history));

// eslint-disable-next-line no-underscore-dangle
export default configureStore(window.__PRELOADED_STATE__, middlewares);
