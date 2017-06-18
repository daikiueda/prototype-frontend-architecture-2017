import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import './LayeredSlidingPanes.scss';

const CSS_ROOT = 'commons--frame--layered-sliding-panes';

export default class LayeredSlidingPanes extends React.Component {
  static get propTypes() {
    return {
      children: PropTypes.arrayOf(PropTypes.element),
    };
  }

  static get defaultProps() {
    return {
      children: [],
    };
  }

  static get paneClassNames() {
    return {
      1: 'child',
      2: 'parent',
      3: 'before-parent',
    };
  }

  render() {
    const contents = this.props.children.length
      ? this.props.children : [this.props.children];
    const panesLength = contents.length;

    return (
      <CSSTransitionGroup
        component="div"
        className={`${CSS_ROOT}`}
        transitionName="transition"
        transitionEnterTimeout={16}
        transitionLeaveTimeout={16}
      >
        {contents.map((child, index) => {
          const className
            = LayeredSlidingPanes.paneClassNames[panesLength - index] || '';
          const key = (child.props && child.props.id) || index;

          return (
            <div key={key} className={className}>{child}</div>
          );
        })}
      </CSSTransitionGroup>
    );
  }
}
