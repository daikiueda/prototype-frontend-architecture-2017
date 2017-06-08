import { Map } from 'immutable';
import { createAction } from 'redux-actions';

const INITIAL_STATE = Map();

const ACTIONS = {
  ADD: 'TooMuchTodo/REDUCER/ENTITIES/ADD',
};

export const actions = {
  add: createAction(ACTIONS.ADD),
};

const processes = {
  [ACTIONS.ADD]: (state, payload) => {
    const entities = Array.isArray(payload) ? payload : [payload];

    const normalized = entities.map((entity) => ({
      // TODO: Apply normalizr?
      [entity.constructor.name]: {
        [entity.id]: entity,
      },
    }));
    return state.mergeDeep(...normalized);
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
