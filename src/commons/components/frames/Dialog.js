import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Dialog.scss';

const CSS_ROOT = 'commons--frame--dialog';

export default class Dialog extends React.Component {
  static get propTypes() {
    return {
      title: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
      ]),
      headerAside: PropTypes.element,
      footer: PropTypes.element,
      footerAside: PropTypes.element,
      children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
      ]).isRequired,
      className: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      title: null,
      headerAside: null,
      footer: null,
      footerAside: null,
      className: '',
    };
  }

  renderHeader() {
    const titleElm = this.props.title && typeof this.props.title === 'string'
      ? <h1 className={`${CSS_ROOT}__title`}>{this.props.title}</h1>
      : this.props.title;
    const asideElm = this.props.headerAside
      && <div className={`${CSS_ROOT}__header-aside`}>{this.props.headerAside}</div>;

    if (!titleElm && !asideElm) {
      return null;
    }

    return (
      <header className={titleElm ? '' : `${CSS_ROOT}__header--aside-only`}>
        {titleElm}
        {asideElm}
      </header>
    );
  }

  renderFooter() {
    const mainElm = this.props.footer
      && <div className={`${CSS_ROOT}__footer-main`}>{this.props.footer}</div>;
    const asideElm = this.props.footerAside
      && <div className={`${CSS_ROOT}__footer-aside`}>{this.props.footerAside}</div>;

    if (!mainElm && !asideElm) {
      return null;
    }

    return (
      <footer className={asideElm ? `${CSS_ROOT}__footer--has-aside` : ''}>
        {asideElm}
        {mainElm}
      </footer>
    );
  }

  render() {
    return (
      <div className={classNames(CSS_ROOT, this.props.className)}>
        <section>
          {this.renderHeader()}
          <div className={`${CSS_ROOT}__body`}>{this.props.children}</div>
          {this.renderFooter()}
        </section>
      </div>
    );
  }
}
