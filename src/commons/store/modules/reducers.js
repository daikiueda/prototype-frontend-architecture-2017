import { combineReducers } from 'redux';

import ui from './ui/reducers';

const reducers = combineReducers({
  ui,
});

export default reducers;
