import { createAction } from 'redux-actions';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../constants/counter';

export const increment = createAction(INCREMENT_COUNTER);
export const decrement = createAction(DECREMENT_COUNTER);
