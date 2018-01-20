import {
  GET_CONVERSIONS,
  CHANGE_AMOUNT,
  CHANGE_PRIMARY_CURRENCY,
  CHANGE_SECONDARY_CURRENCY,
  REVERSE_CURRENCY,
} from '../actions/types';
import { calculateSecondary } from '../utils/utils'

const initialState = {
  amount: '',
  primaryCurrency: 'USD',
  secondaryCurrency: 'ARS',
  conversions: {},
  isLoading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_AMOUNT:
      return { ...state, amount: action.amount || '' };
    case GET_CONVERSIONS.PENDING:
      return { ...state, isLoading: true };
    case GET_CONVERSIONS.SUCCESS:
      return {
        ...state,
        conversions: action.response.data.rates || {},
        isLoading: false,
      };
    case CHANGE_PRIMARY_CURRENCY:
      return { ...state, primaryCurrency: action.currency };
    case CHANGE_SECONDARY_CURRENCY:
      return { ...state, secondaryCurrency: action.currency };
    case REVERSE_CURRENCY:
        const { conversions, primaryCurrency, secondaryCurrency, amount } = state;
        const secondaryValue = calculateSecondary(conversions, primaryCurrency, secondaryCurrency, amount);
        debugger;

        return {
        ...state,
        primaryCurrency: state.secondaryCurrency,
        secondaryCurrency: state.primaryCurrency,
        amount: secondaryValue,
      };
    default:
      return state;
  }
}
