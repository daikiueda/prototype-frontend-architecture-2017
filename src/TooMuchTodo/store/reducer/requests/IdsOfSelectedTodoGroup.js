import { List } from 'immutable';
import { createAction } from 'redux-actions';

const INITIAL_STATE = List();

const REDUCER__SELECT_TODO_GROUP = 'TooMuchTodo/IdsOfSelectedTodoGroup/REDUCER__ADD_TODO_GROUP';

export const actions = {
  addTodoGroup: createAction(REDUCER__SELECT_TODO_GROUP),
};

const processes = {
  [REDUCER__SELECT_TODO_GROUP]: (state, payload) => {
    return state.push(payload.id);
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
