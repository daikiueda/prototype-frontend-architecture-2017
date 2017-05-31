import { combineReducers } from 'redux';

import todoGroups from './todoGroups';

const reducers = combineReducers({
  todoGroups,
});

export default reducers;
