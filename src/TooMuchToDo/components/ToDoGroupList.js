import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

export default class ToDoGroupList extends React.Component {
  static get propTypes() {
    return {
      toDoGroups: PropTypes.instanceOf(List),
    };
  }

  static get defaultProps() {
    return {
      toDoGroups: List(),
    };
  }

  renderToDoGroupRecord(toDoGroup) {
    return (
      <tr key={toDoGroup.id}>
        <td><input type="checkbox" /></td>
        <td>{toDoGroup.title}</td>
        <td>{toDoGroup.description}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
        <td>
          <button>Show Detail</button>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table>
        <tbody>
          {this.props.toDoGroups.map(this.renderToDoGroupRecord)}
        </tbody>
      </table>
    );
  }
}
