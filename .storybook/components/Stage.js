import React from 'react';

export default class Stage extends React.Component {
  render() {
    return <div style={{ padding: '20px 40px' }}>{this.props.children}</div>
  }
}
