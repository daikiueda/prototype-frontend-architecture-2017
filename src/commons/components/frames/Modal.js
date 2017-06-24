import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import './Modal.scss';

const CSS_ROOT = 'commons--frame--modal';

export default class Modal extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
      ]).isRequired,
    };
  }

  render() {
    return (
      <CSSTransitionGroup
        component="div"
        className={`${CSS_ROOT}`}
        transitionName="transition"
        transitionEnterTimeout={16}
        transitionLeaveTimeout={16}
      >
        <div className={`${CSS_ROOT}__partition`} />
        <div className={`${CSS_ROOT}__content`}>
          {this.props.children}
        </div>
      </CSSTransitionGroup>
    );
  }
}
