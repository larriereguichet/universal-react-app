import { SET_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter';

export const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTER:
      return action.payload;

    case INCREMENT_COUNTER:
      return state + 1;

    case DECREMENT_COUNTER:
      return state - 1;

    default:
      return state;
  }
};
