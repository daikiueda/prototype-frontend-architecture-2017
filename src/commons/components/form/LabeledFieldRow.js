import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './LabeledFieldRow.scss';

const CSS_ROOT = 'commons--form--labeled-field-row';

export default class LabeledFieldRow extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.any.isRequired,
      label: PropTypes.any,
      className: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      label: '',
      className: '',
    };
  }

  render() {
    return (
      <div className={classNames(CSS_ROOT, this.props.className)}>
        <div className={`${CSS_ROOT}__label`}>
          <label>{this.props.label}</label>
        </div>
        <div className={`${CSS_ROOT}__field`}>{this.props.children}</div>
      </div>
    );
  }
}
