import { call, takeLatest } from 'redux-saga/effects';
import { START_APP } from './actions/types';
import { getInitialData } from './actions/action';
import { performRequest } from './utils/sagasHelpers';
import services from './services/request';


export function* getLatest() {
  yield call(performRequest, services.latest, getInitialData);
}

export default function* rootSaga() {
  yield takeLatest(START_APP, getLatest);
  // yield takeLatest(REVERSE_CURRENCY, something);
  // yield takeLatest(CHANGE_AMOUNT, updateInputs);
  // yield takeLatest(CHANGE_PRIMARY_CURRENCY, updateInputs);
  // yield takeLatest(CHANGE_SECONDARY_CURRENCY, updateInputs);
}
