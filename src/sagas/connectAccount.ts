import { call, put } from 'redux-saga/effects';
import {
  ConnectAccountRequest,
  ConnectAccountFailure,
  connectAccountFailure,
  ConnectAccountSuccess,
  connectAccountSuccess
} from '../actions/connectAccount';
import { fetchDashboard } from '../api/dashboard';
import {
  accountConnectionFailedToast,
  accountConnectionSuccessfulToast
} from '../utils/toaster';

export function* fetchAccountInfo(action: ConnectAccountRequest) {
  try {
    const accountData = yield call(fetchDashboard);
    accountConnectionSuccessfulToast();
    yield put<ConnectAccountSuccess>(connectAccountSuccess(accountData));
  } catch (e) {
    console.warn(e);
    accountConnectionFailedToast();
    yield put<ConnectAccountFailure>(connectAccountFailure());
  }
}
