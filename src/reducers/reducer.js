import { REVERSE_CURRENCY } from '../actions/types';

const initialState = {
  amount: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REVERSE_CURRENCY:
      return state;
    default:
      return state;
  }
}
