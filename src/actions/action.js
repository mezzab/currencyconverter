import { GET_INITIAL_DATA, REVERSE_CURRENCY, CHANGE_AMOUNT, CHANGE_PRIMARY_CURRENCY, CHANGE_SECONDARY_CURRENCY } from './types';

export const getInitialData = () => ({
  type: GET_INITIAL_DATA,
});

const reverseCurrency = () => ({
  type: REVERSE_CURRENCY,
});

export const changeAmount = amount => ({
  type: CHANGE_AMOUNT,
  amount,
});

export const changePrimaryCurrency = currency => ({
  type: CHANGE_PRIMARY_CURRENCY,
  currency,
});

export const changeSecondaryCurrency = currency => ({
  type: CHANGE_SECONDARY_CURRENCY,
  currency,
});

export default {
  reverseCurrency,
  changeAmount,
  changePrimaryCurrency,
  changeSecondaryCurrency,
};
