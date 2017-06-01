import test from 'ava';
import { List } from 'immutable';

import reducer, { actions } from '../../../../../src/TooMuchTodo/store/modules/reports';

test('actions/addReport', (t) => {
  t.deepEqual(
    actions.addReport(),
    { type: 'TooMuchTodo/report/REDUCER__ADD_REPORT' },
  );
});

test('modules/REDUCER__ADD_REPORT', (t) => {
  const action = {
    type: 'TooMuchTodo/report/REDUCER__ADD_REPORT',
    payload: 1,
  };

  t.deepEqual(reducer(List(), action).toArray(), [1]);
});
