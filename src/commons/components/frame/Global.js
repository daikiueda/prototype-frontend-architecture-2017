import React from 'react';
import PropTypes from 'prop-types';

import './Global.scss';

const CSS_ROOT = 'commons-frame-global';

export default class Global extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(React.Component),
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.instanceOf(React.Component)),
      ]).isRequired,
    };
  }

  render() {
    return (
      <div id={`${CSS_ROOT}`}>
        <div className={`${CSS_ROOT}--main`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
