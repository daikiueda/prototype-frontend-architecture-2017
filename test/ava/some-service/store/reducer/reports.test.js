import test from 'ava';
import { List } from 'immutable';

import reducer, { actions } from '../../../../../src/TooMuchToDo/store/reducer/reports';

test('actions/addReport', (t) => {
  t.deepEqual(
    actions.addReport(),
    { type: 'TooMuchToDo/report/REDUCER__ADD_REPORT' },
  );
});

test('reducer/REDUCER__ADD_REPORT', (t) => {
  const action = {
    type: 'TooMuchToDo/report/REDUCER__ADD_REPORT',
    payload: 1,
  };

  t.deepEqual(reducer(List(), action).toArray(), [1]);
});
