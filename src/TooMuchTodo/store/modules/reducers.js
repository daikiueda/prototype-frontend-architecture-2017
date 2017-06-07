import { combineReducers } from 'redux';

import entities from './entities/reducers';
import requests from './ui/reducers';

const reducers = combineReducers({
  entities,
  requests,
});

export default reducers;
