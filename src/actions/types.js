/* eslint-disable import/prefer-default-export */
import { asyncActionType } from '../utils/reduxActions';

export const START_APP = 'START_APP';
export const GET_CONVERSIONS = asyncActionType('GET_CONVERSIONS');
export const REVERSE_CURRENCY = 'REVERSE_CURRENCY';
export const CHANGE_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const CHANGE_PRIMARY_CURRENCY = 'CHANGE_PRIMARY_CURRENCY';
export const CHANGE_SECONDARY_CURRENCY = 'CHANGE_SECONDARY_CURRENCY';

