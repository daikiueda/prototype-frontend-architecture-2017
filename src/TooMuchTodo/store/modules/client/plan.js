import { createAction } from 'redux-actions';

const INITIAL_STATE = null;

const ACTIONS = {
  START: 'TooMuchTodo/REDUCER/CLIENT/PLAN/START',
  ABORT: 'TooMuchTodo/REDUCER/CLIENT/PLAN/ABORT',
};

export const actions = {
  start: createAction(ACTIONS.START),
  abort: createAction(ACTIONS.ABORT),
};

const processes = {
  [ACTIONS.START]: (state, payload) => {
    return payload;
  },
  [ACTIONS.ABORT]: () => {
    return null;
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
