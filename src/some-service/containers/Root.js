import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from '../store/sagas/trialSaga';

class Root extends React.PureComponent {
  static get propTypes() {
    return {
      children: PropTypes.any,
    };
  }

  static get defaultProps() {
    return {
      children: null,
    };
  }

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <div>Some Service Root</div>
        <p>{this.props.children}</p>
        <button onClick={() => dispatch(actions.addReport(24))}>24</button>
      </div>
    );
  }
}

export default connect((state) => state)(Root);
