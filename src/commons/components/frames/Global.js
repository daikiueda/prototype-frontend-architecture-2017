import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Global.scss';

const CSS_ROOT = 'commons--frame--global';

export default class Global extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
      ]).isRequired,
      className: PropTypes.string,
      modal: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
      ]),
    };
  }

  static get defaultProps() {
    return {
      className: '',
      modal: null,
    };
  }

  render() {
    const { children, modal } = this.props;
    const className = classNames(
      CSS_ROOT,
      this.props.className,
      { [`${CSS_ROOT}--has-modal`]: modal },
    );

    return (
      <div className={className}>
        {children}
        {modal}
      </div>
    );
  }
}
