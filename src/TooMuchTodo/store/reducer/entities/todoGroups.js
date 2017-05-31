import { List } from 'immutable';
import { createAction } from 'redux-actions';

import TodoGroup from '../../../domain/models/TodoGroup';

const INITIAL_STATE = List();

const REDUCER__CREATE_TODO_GROUP = 'TooMuchTodo/toTOGroups/REDUCER__CREATE_TODO_GROUP';
const REDUCER__ADD_TODO_GROUP = 'TooMuchTodo/toTOGroups/REDUCER__ADD_TODO_GROUP';

export const actions = {
  createTodoGroup: createAction(REDUCER__CREATE_TODO_GROUP),
  addTodoGroup: createAction(REDUCER__ADD_TODO_GROUP),
};

const processes = {
  [REDUCER__CREATE_TODO_GROUP]: (state) => {
    // Todo
    return state.push(new TodoGroup({ id: Date.now() }));
  },
  [REDUCER__ADD_TODO_GROUP]: (state, payload) => {
    return state.push(payload);
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
