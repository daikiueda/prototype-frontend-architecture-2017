import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer as HotLoadAppContainer } from 'react-hot-loader';

import configureStore from '../commons/store/configureStore';

import reducers from './store/modules/reducers';
import sagas from './store/saga/index';
import ServiceRoot from './containers/Root';

const store = configureStore(reducers, sagas);

const render = (Container) => {
  ReactDom.render(
    <HotLoadAppContainer>
      <Provider store={store}>
        <Container />
      </Provider>
    </HotLoadAppContainer>,
    document.getElementById('app'),
  );
};

render(ServiceRoot);

// Remove on PRODUCTION Build
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const HotServiceRoot = require('./containers/Root').default;
    render(HotServiceRoot);
  });
}
