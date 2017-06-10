import { Map } from 'immutable';
import { createAction } from 'redux-actions';

import TodoList from '../../../domain/models/TodoList';

const INITIAL_STATE = Map();

const ACTIONS = {
  CREATE: 'TooMuchTodo/todoLists/REDUCER__CREATE_TODO_LIST',
  ADD: 'TooMuchTodo/todoLists/REDUCER__ADD_TODO_LIST',
};

export const actions = {
  createTodoList: createAction(ACTIONS.CREATE),
  addTodoList: createAction(ACTIONS.ADD),
};

const processes = {
  [ACTIONS.CREATE]: (state) => {
    // Todo 要否検討：生成してストアに投入する処理だと、使い所がないかも…
    const todoList = new TodoList({ id: Date.now() });
    return state.set(todoList.id, todoList);
  },

  [ACTIONS.ADD]: (state, payload) => {
    return state.set(payload.id, payload);
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}