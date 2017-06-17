import { combineReducers } from 'redux';

import entities from './entities';
import ui from './ui/reducers';

const reducers = combineReducers({
  entities,
  ui,
});

export default reducers;
