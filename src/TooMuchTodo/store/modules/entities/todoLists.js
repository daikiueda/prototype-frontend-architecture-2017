import { List } from 'immutable';
import { createAction } from 'redux-actions';

import TodoList from '../../../domain/models/TodoList';

const INITIAL_STATE = List();

const REDUCER__CREATE_TODO_LIST = 'TooMuchTodo/toTOGroups/REDUCER__CREATE_TODO_LIST';
const REDUCER__ADD_TODO_LIST = 'TooMuchTodo/toTOGroups/REDUCER__ADD_TODO_LIST';

export const actions = {
  createTodoList: createAction(REDUCER__CREATE_TODO_LIST),
  addTodoList: createAction(REDUCER__ADD_TODO_LIST),
};

const processes = {
  [REDUCER__CREATE_TODO_LIST]: (state) => {
    // Todo
    return state.push(new TodoList({ id: Date.now() }));
  },
  [REDUCER__ADD_TODO_LIST]: (state, payload) => {
    return state.push(payload);
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
