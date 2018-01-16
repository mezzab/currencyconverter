import { START_APP, GET_INITIAL_DATA, REVERSE_CURRENCY, CHANGE_AMOUNT, CHANGE_PRIMARY_CURRENCY, CHANGE_SECONDARY_CURRENCY } from './types';
import { makeRequestActionCreator, makeActionCreator } from '../utils/reduxActions';

export const startApp = makeActionCreator(START_APP);

export const getInitialData = makeRequestActionCreator(GET_INITIAL_DATA);

export const reverseCurrency = makeActionCreator(REVERSE_CURRENCY);

export const changeAmount = makeActionCreator(CHANGE_AMOUNT, 'amount');

export const changePrimaryCurrency = makeActionCreator(CHANGE_PRIMARY_CURRENCY, 'currency');

export const changeSecondaryCurrency = makeActionCreator(CHANGE_SECONDARY_CURRENCY, 'currency');

export default {
  startApp,
  getInitialData,
};

