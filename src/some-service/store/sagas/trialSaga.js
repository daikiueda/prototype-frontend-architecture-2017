import { createAction } from 'redux-actions';
import { put, takeEvery } from 'redux-saga/effects';

import { actions as reportsActions } from '../reducer/reports';

const sagas = {};

const USER__ADD_REPORT = 'some-service/report/USER__ADD_REPORT';

export const actions = {
  addReport: createAction(USER__ADD_REPORT),
};

sagas[USER__ADD_REPORT] = function* addReport({ payload }) {
  yield put(reportsActions.addReport(payload));
};

export default function* trialSaga() {
  yield takeEvery(USER__ADD_REPORT, sagas[USER__ADD_REPORT]);
}
