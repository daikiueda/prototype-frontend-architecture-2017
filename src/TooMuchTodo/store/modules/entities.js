import { createAction } from 'redux-actions';
import { Map } from 'immutable';
import { createSelector } from 'reselect';
import {
  normalizeImmutableModelEntities,
  denormalizeImmutableModelEntities,
} from './entities-helpers';

const INITIAL_STATE = Map();

const ACTIONS = {
  CREATE: 'TooMuchTodo/REDUCER/ENTITIES/CREATE',
  ADD: 'TooMuchTodo/REDUCER/ENTITIES/ADD',
};

export const actions = {
  create: createAction(ACTIONS.CREATE),
  add: createAction(ACTIONS.ADD),
};

export const selectors = {};
selectors.raw = (state) => (state.entities);
selectors.denormalized = createSelector(
  selectors.raw,
  (raw) => raw && denormalizeImmutableModelEntities(raw),
);

const processes = {
  [ACTIONS.CREATE]: (state, payload) => {
    // TODO: 生成方針は別途検討。ModelClass.createで、createの実装をドメインに寄せたい気もしてる
    const ModelClass = payload;
    const normalized = normalizeImmutableModelEntities(new ModelClass({ id: Date.now() }));
    return state.mergeDeep(normalized);
  },

  [ACTIONS.ADD]: (state, payload) => {
    const normalized = normalizeImmutableModelEntities(payload);
    return state.mergeDeep(normalized);
  },
};

export default function reducer(state = INITIAL_STATE, action) {
  return action && processes[action.type]
    ? processes[action.type](state, action.payload) : state;
}
