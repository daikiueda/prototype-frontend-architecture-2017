import React from 'react';
import PropTypes from 'prop-types';

import TodoList from '../../domain/models/TodoList';

export default class Table extends React.Component {
  static get propTypes() {
    return {
      todoListEntities: PropTypes.arrayOf(
        PropTypes.instanceOf(TodoList),
      ),
    };
  }

  static get defaultProps() {
    return {
      todoListEntities: [],
    };
  }

  renderTodoListRows() {
    const rows = [];
    this.props.todoListEntities.forEach((todoList) => {
      rows.push(
        <tr key={todoList.id}>
          <td><input type="checkbox" /></td>
          <td>{todoList.title}</td>
          <td>{todoList.description}</td>
          <td>
            <button>Edit</button>
            <button>Delete</button>
          </td>
          <td>
            <button>Show Detail</button>
          </td>
        </tr>,
      );
    });
    return rows;
  }

  render() {
    return (
      <table>
        <tbody>
          { this.renderTodoListRows() }
        </tbody>
      </table>
    );
  }
}
