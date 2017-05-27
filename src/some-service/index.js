import React from 'react';
import ReactDom from 'react-dom';

// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer as HotReloadAppContainer } from 'react-hot-loader';

import ServiceRoot from './containers/Root';

const render = (Component) => {
  ReactDom.render(
    <HotReloadAppContainer>
      <Component />
    </HotReloadAppContainer>,
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
