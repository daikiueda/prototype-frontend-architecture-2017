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

export const LIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
export const LIPSUM_JA = '複素数体であれば、任意のCM-タイプの A は、実際、数体である定義体（英語版）(field of definition)を持っている。自己準同型環の可能なタイプは、対合（ロサチの対合（英語版）(Rosati involution）をもつ環として既に分類されていて、CM-タイプのアーベル多様体の分類を導き出す。楕円曲線と同じような方法でCM-タイプの多様体を構成するには、Cd の中の格子 Λ から始め、アーベル多様体のリーマンの関係式（英語版）(Riemann relations)を考えに入れる必要がある。';
