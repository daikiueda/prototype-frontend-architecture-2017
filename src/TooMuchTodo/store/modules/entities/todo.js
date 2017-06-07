import { Map } from 'immutable';
import { createAction } from 'redux-actions';

import Todo from '../../../domain/models/Todo';

const INITIAL_STATE = Map();

const ACTIONS = {
  CREATE: 'TooMuchTodo/todoLists/REDUCER__CREATE_TODO',
  ADD: 'TooMuchTodo/todoLists/REDUCER__ADD_TODO',
};

export const actions = {
  createTodo: createAction(ACTIONS.CREATE),
  addTodo: createAction(ACTIONS.ADD),
};

const processes = {
  [ACTIONS.CREATE]: (state) => {
    // Todo 要否検討：生成してストアに投入する処理だと、使い所がないかも…
    const todo = new Todo({ id: Date.now() });
    return state.set(todo.id, todo);
  },

  [ACTIONS.ADD]: (state, payload) => {
    return state.set(payload.id, payload);
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
