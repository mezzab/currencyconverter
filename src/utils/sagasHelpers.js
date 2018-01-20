import { call, put } from 'redux-saga/effects';
import swal from 'sweetalert';

export function* performRequest(service, requestActionCreator) {
  yield put(requestActionCreator.pending);
  try {
    const response = yield call(service);
    yield put(requestActionCreator.success(response));
  } catch (error) {
    swal('Oops', 'Something went wrong! Check your connection and try again. ', 'error');
    yield put(requestActionCreator.error(error));
  }
}

export default {
  performRequestSmart: performRequest,
};
