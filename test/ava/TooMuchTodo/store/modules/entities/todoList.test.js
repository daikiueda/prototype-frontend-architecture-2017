import test from 'ava';
import { Map } from 'immutable';

import reducer, { actions } from 'TooMuchTodo/store/modules/entities/todoList';

import TodoList from 'TooMuchTodo/domain/models/TodoList';

test('actions/addTodoList', (t) => {
  t.deepEqual(
    actions.addTodoList(),
    { type: 'TooMuchTodo/todoLists/REDUCER__ADD_TODO_LIST' },
  );
});

test('modules/REDUCER__ADD_REPORT', (t) => {
  const action = {
    type: 'TooMuchTodo/todoLists/REDUCER__ADD_TODO_LIST',
    payload: new TodoList({ id: 1111 }),
  };

  t.deepEqual(
    reducer(Map(), action).toJS(),
    {
      1111: {
        description: '',
        id: 1111,
        isSaved: false,
        title: '',
        todos: [],
      },
    },
  );
});
