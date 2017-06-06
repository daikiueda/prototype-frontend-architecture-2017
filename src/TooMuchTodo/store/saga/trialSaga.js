import { createAction } from 'redux-actions';
import { put, takeEvery } from 'redux-saga/effects';

import { actions as reportsActions } from '../modules/entities/todoList';

const sagas = {};

const USER__ADD_REPORT = 'TooMuchTodo/report/USER__ADD_REPORT';

export const actions = {
  addReport: createAction(USER__ADD_REPORT),
};

sagas[USER__ADD_REPORT] = function* addReport({ payload }) {
  yield put(reportsActions.addReport(payload));
};

export default function* saga() {
  yield takeEvery(USER__ADD_REPORT, sagas[USER__ADD_REPORT]);
}
