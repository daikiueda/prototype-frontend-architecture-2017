import 'babel-polyfill';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

const composeEnhancers
  = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  /* eslint-disable no-underscore-dangle */
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
  /* eslint-enable no-underscore-dangle */

export default function configureStore(reducers, sagas) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  if (sagas) {
    sagaMiddleware.run(sagas);
  }

  return store;
}
