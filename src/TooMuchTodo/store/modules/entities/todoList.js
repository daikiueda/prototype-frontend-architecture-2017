import { Map, Set } from 'immutable';
import { createAction } from 'redux-actions';

import TodoList from '../../../domain/models/TodoList';

const INITIAL_STATE = {
  byId: Map(),
  allIds: Set(),
};

const REDUCER__CREATE_TODO_LIST = 'TooMuchTodo/todoLists/REDUCER__CREATE_TODO_LIST';
const REDUCER__ADD_TODO_LIST = 'TooMuchTodo/todoLists/REDUCER__ADD_TODO_LIST';

export const actions = {
  createTodoList: createAction(REDUCER__CREATE_TODO_LIST),
  addTodoList: createAction(REDUCER__ADD_TODO_LIST),
};

const processes = {
  [REDUCER__CREATE_TODO_LIST]: (state) => {
    // Todo 要否検討：生成してストアに投入する処理だと、使い所がないかも…
    const todoList = new TodoList({ id: Date.now() });
    return {
      ...state,
      byId: state.byId.set(todoList.id, todoList),
      allIds: state.allIds.add(todoList.id),
    };
  },

  [REDUCER__ADD_TODO_LIST]: (state, payload) => {
    return {
      ...state,
      byId: state.byId.set(payload.id, payload),
      allIds: state.allIds.add(payload.id),
    };
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
