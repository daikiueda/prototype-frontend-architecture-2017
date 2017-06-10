import { createAction } from 'redux-actions';
import { Map } from 'immutable';
import normalizeImmutableModelEntities from './entities-helpers';

const INITIAL_STATE = Map();

const ACTIONS = {
  ADD: 'TooMuchTodo/REDUCER/ENTITIES/ADD',
};

export const actions = {
  add: createAction(ACTIONS.ADD),
};

const processes = {
  [ACTIONS.ADD]: (state, payload) => {
    const normalized = normalizeImmutableModelEntities(payload);
    return state.mergeDeep(normalized);
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
