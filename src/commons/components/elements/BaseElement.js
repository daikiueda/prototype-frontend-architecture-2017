import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class BaseElement extends React.Component {
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
    const { children, className, ...restProps } = this.props;
    return React.createElement(
      this.constructor.elementType,
      Object.assign(
        { className: classNames(this.constructor.CSS_ROOT, className) },
        restProps,
      ),
      children,
    );
  }
}
