import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Dialog.scss';

const CSS_ROOT = 'commons--frame--dialog';

export default class Dialog extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
      ]).isRequired,
      className: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      className: '',
    };
  }

  render() {
    return (
      <div className={classNames(CSS_ROOT, this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
