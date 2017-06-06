import { combineReducers } from 'redux';

import todoList from './todoList';

const reducers = combineReducers({
  todoList,
});

export default reducers;
