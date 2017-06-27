import { createAction } from 'redux-actions';

const INITIAL_STATE = 0;

const ACTIONS = {
  START: 'COMMONS/REDUCER/UI/WAITING/START',
  END: 'COMMONS/REDUCER/UI/WAITING/END',
};

export const actions = {
  start: createAction(ACTIONS.START),
  end: createAction(ACTIONS.END),
};

const processes = {
  [ACTIONS.START]: (state) => {
    return state + 1;
  },
  [ACTIONS.END]: (state) => {
    return state - 1;
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
