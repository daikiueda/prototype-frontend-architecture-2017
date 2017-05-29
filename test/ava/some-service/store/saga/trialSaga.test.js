import test from 'ava';

import saga, { actions } from '../../../../../src/some-service/store/saga/trialSaga';

test('actions/addReport', (t) => {
  t.deepEqual(
    actions.addReport(),
    { type: 'some-service/report/USER__ADD_REPORT' },
  );
});

test('saga/root', (t) => {
  const roorGenerator = saga();


  t.fali();
});
