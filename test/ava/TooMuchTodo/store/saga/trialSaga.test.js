import test from 'ava';

import /* saga, */ { actions } from 'TooMuchTodo/store/saga/trialSaga';

test('actions/addReport', (t) => {
  t.deepEqual(
    actions.addReport(),
    { type: 'TooMuchTodo/report/USER__ADD_REPORT' },
  );
});

test('saga/root', (t) => {
  t.pass();
});
