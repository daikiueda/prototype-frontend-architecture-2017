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

  renderHeader() {
    return (
      <header>
        <h1>Header Text</h1>
      </header>
    );
  }

  renderFooter() {
    return (
      <footer>
        Footer
      </footer>
    );
  }

  render() {
    return (
      <div className={classNames(CSS_ROOT, this.props.className)}>
        <section>
          {this.renderHeader()}
          {this.props.children}
          {this.renderFooter()}
        </section>
      </div>
    );
  }
}
