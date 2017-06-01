import { combineReducers } from 'redux';

import todoGroups from './todoLists';

const reducers = combineReducers({
  todoGroups,
});

export default reducers;
