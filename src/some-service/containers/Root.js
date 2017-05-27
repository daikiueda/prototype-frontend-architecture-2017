import React from 'react';
import PropTypes from 'prop-types';

export default class Root extends React.PureComponent {
  static get propTypes() {
    return {
      children: PropTypes.any.isRequired,
    };
  }

  static get defaultTypes() {
    return {
      children: null,
    };
  }

  render() {
    return (
      <div>
        <div>Some Service Root</div>
        <p>{this.props.children}</p>
      </div>
    );
  }
}
