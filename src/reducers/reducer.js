import { GET_INITIAL_DATA, CHANGE_AMOUNT } from '../actions/types';

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
    case GET_INITIAL_DATA.SUCCESS:
      return { ...state, conversions: action.response.data.rates };
    default:
      return state;
  }
}
