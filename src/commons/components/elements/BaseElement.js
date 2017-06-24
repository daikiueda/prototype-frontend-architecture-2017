import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class BaseElement extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.element),
      ]),
      className: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      children: null,
      className: '',
    };
  }

  render() {
    const { children, className, ...restProps } = this.props;

    delete restProps.input;
    delete restProps.meta;

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
