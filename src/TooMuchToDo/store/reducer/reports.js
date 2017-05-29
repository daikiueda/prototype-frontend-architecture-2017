import { List } from 'immutable';
import { createAction } from 'redux-actions';

const INITIAL_STATE = List();

const REDUCER__ADD_REPORT = 'TooMuchToDo/report/REDUCER__ADD_REPORT';

export const actions = {
  addReport: createAction(REDUCER__ADD_REPORT),
};

const processes = {
  [REDUCER__ADD_REPORT]: (state, payload) => {
    return state.push(payload);
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
