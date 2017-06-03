import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Table.scss';

const CSS_ROOT = 'commons--elements--table';

export default class Table extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any.isRequired,
      className: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      className: '',
    };
  }

  render() {
    const { children, className, ...restProps } = this.props;
    return (
      <table
        className={classNames(CSS_ROOT, className)}
        {...restProps}
      >
        {children}
      </table>
    );
  }
}
