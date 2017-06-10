import test from 'ava';
import { Map, List } from 'immutable';

import reducer, { actions } from 'TooMuchTodo/store/modules/entities';

import Todo from 'TooMuchTodo/domain/models/Todo';
import TodoList from 'TooMuchTodo/domain/models/TodoList';

const mockTodo1 = new Todo({ id: 1 });
const mockTodo2 = new Todo({ id: 2 });
const mockTodoList1 = new TodoList({ id: 1, todos: [mockTodo1] });
const mockTodoList2 = new TodoList({ id: 2, todos: [mockTodo1, mockTodo2] });

test('reducer <- actions.add', (t) => {
  const firstState = reducer(Map(), actions.add(mockTodoList1));
  const nextState = reducer(firstState, actions.add(mockTodoList2));
  const expect = Map({
    Todo: Map({ 1: mockTodo1, 2: mockTodo2 }),
    TodoList: Map({
      1: mockTodoList1.set('todos', List([1])),
      2: mockTodoList2.set('todos', List([1, 2])),
    }),
  });
  t.is(nextState.toString(), expect.toString());
});
