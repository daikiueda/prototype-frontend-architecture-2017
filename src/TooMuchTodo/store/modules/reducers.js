import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import commons from '../../../commons/store/modules/reducers';
import entities from './entities';
import client from './client/reducers';
import ui from './ui/reducers';

const reducers = combineReducers({
  commons,
  entities,
  client,
  ui,
  form,
});

export default reducers;
