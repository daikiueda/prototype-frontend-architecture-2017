import { fork } from 'redux-saga/effects';

import trialSaga from './trialSaga';

export default function* sagas() {
  yield fork(trialSaga);
}
