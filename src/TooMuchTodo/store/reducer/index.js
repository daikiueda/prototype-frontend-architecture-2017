import { combineReducers } from 'redux';

import entities from './entities';
import requests from './requests';

const reducers = combineReducers({
  entities,
  requests,
});

export default reducers;
