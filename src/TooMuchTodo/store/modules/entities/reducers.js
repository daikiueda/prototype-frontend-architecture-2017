import { combineReducers } from 'redux';

import todo from './todo';
import todoList from './todoList';

const reducers = combineReducers({
  todo,
  todoList,
});

export default reducers;
