import { REVERSE_CURRENCY, CHANGE_AMOUNT } from '../actions/types';

const initialState = {
  amount: 100,
  primaryCurrency: 'USD',
  secondaryCurrency: 'GBP',
  conversions: {},
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_AMOUNT:
      return { ...state, amount: action.amount || 0 };
    case REVERSE_CURRENCY:
      return state;
    default:
      return state;
  }
}
