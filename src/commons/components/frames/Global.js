import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
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
      renderModal: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      className: '',
      renderModal: () => null,
    };
  }

  renderModal(content) {
    // TODO: CSSTransitionGroup不要？
    return content
      ? (
        <CSSTransitionGroup
          component="div"
          className={`${CSS_ROOT}__modal`}
          transitionName="transition"
          transitionEnterTimeout={16}
          transitionLeaveTimeout={16}
        >
          <div className={`${CSS_ROOT}__modal-partition`} />
          <div className={`${CSS_ROOT}__modal-content`}>
            {content}
          </div>
        </CSSTransitionGroup>
      )
      : null;
  }

  render() {
    const modalContent = this.props.renderModal();

    const className = classNames(
      CSS_ROOT,
      this.props.className,
      modalContent ? `${CSS_ROOT}--has-modal` : '',
    );

    return (
      <div className={className}>
        {this.props.children}
        {this.renderModal(modalContent)}
      </div>
    );
  }
}
