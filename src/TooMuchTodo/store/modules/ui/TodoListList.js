import { List } from 'immutable';
import { createAction } from 'redux-actions';

const INITIAL_STATE = List();

const ACTIONS = {
  SELECT: 'TooMuchTodo/REDUCER/UI/TodoListList/SELECT',
};

export const actions = {
  select: createAction(ACTIONS.SELECT),
};

const processes = {
  [ACTIONS.SELECT]: (state, payload) => {
    return state.push(payload.id);
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
