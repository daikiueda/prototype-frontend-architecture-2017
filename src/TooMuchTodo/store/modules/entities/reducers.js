import { combineReducers } from 'redux';

import todoList from './todoLists';

const reducers = combineReducers({
  todoList,
});

export default reducers;
