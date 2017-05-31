import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

export default class ToDoGroupList extends React.Component {
  static get propTypes() {
    return {
      todoGroups: PropTypes.instanceOf(List),
    };
  }

  static get defaultProps() {
    return {
      todoGroups: List(),
    };
  }

  renderTodoGroupRecord(todoGroup) {
    return (
      <tr key={todoGroup.id}>
        <td><input type="checkbox" /></td>
        <td>{todoGroup.title}</td>
        <td>{todoGroup.description}</td>
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
          {this.props.todoGroups.map(this.renderTodoGroupRecord)}
        </tbody>
      </table>
    );
  }
}
