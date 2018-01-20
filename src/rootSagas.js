import { call, takeLatest } from 'redux-saga/effects';
import { START_APP,
  CHANGE_SECONDARY_CURRENCY,
  CHANGE_PRIMARY_CURRENCY,
  REVERSE_CURRENCY,
  CHANGE_AMOUNT,
} from './actions/types';
import { getInitialData } from './actions/action';
import { performRequest } from './utils/sagasHelpers';
import services from './services/request';


export function* getLatest() {
  yield call(performRequest, services.latest, getInitialData);
}

export default function* rootSaga() {
  yield takeLatest(START_APP, getLatest);
  yield takeLatest(CHANGE_PRIMARY_CURRENCY, getLatest);
  yield takeLatest(CHANGE_SECONDARY_CURRENCY, getLatest);
  yield takeLatest(REVERSE_CURRENCY, getLatest);
  // yield takeLatest(CHANGE_AMOUNT, getLatest);
}
