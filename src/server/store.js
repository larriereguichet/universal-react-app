import { routerMiddleware } from 'react-router-redux';
import configureStore from '../common/configureStore';
import history from './history';

export default configureStore({ counter: 1 }, [routerMiddleware(history)]);
