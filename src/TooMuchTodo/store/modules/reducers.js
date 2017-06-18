import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import entities from './entities';
import ui from './ui/reducers';

const reducers = combineReducers({
  entities,
  ui,
  form,
});

export default reducers;
