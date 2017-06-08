import test from 'ava';
import { Map } from 'immutable';

import reducer, { actions } from 'TooMuchTodo/store/modules/entities';

import Todo from 'TooMuchTodo/domain/models/Todo';

test('reducer <- actions.add', (t) => {
  const state = reducer(Map(), actions.add(new Todo({ id: 1 })));
  const expect = {
    Todo: {
      1: { id: 1, title: '', description: '', isFinished: false, isSaved: false },
    },
  };
  t.deepEqual(state.toJS(), expect);
});
