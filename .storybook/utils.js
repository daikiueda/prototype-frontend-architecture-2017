import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { reduxForm, reducer as form } from 'redux-form';

class DummyForm extends React.Component {
  render() {
    return (<form>{this.props.children}</form>);
  }
}

export class ConnectedForm extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(combineReducers({ form }));
  }

  render() {
    const Connector
      = reduxForm({ form: `dummy-${Date.now()}`, pure: false })(DummyForm);
    return (
      <Provider store={this.store}>
        <Connector>{this.props.children}</Connector>
      </Provider>
    );
  }
}
