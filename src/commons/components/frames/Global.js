import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Modal from './Modal';

import './Global.scss';

const CSS_ROOT = 'commons--frame--global';

class Global extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
      ]).isRequired,
      className: PropTypes.string,
      ui: PropTypes.shape({
        waiting: PropTypes.number.isRequired,
      }).isRequired,
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

  renderWaiting() {
    if (this.props.ui.waiting === 0) {
      return null;
    }

    return (
      <Modal><div style={{ fontSize: '2em', color: '#fff' }}>Loading...</div></Modal>
    );
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
        {this.renderWaiting()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state.commons });

export default connect(mapStateToProps)(Global);
