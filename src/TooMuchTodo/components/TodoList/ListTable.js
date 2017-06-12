import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../../commons/components/elements/Table';
import TodoList from '../../domain/models/TodoList';

export default class ListTable extends React.Component {
  static get propTypes() {
    return {
      todoLists: PropTypes.arrayOf(
        PropTypes.instanceOf(TodoList),
      ),
    };
  }

  static get defaultProps() {
    return {
      todoLists: [],
    };
  }

  renderTodoListRows() {
    const rows = [];
    this.props.todoLists.forEach((todoList) => {
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
      <Table>
        <tbody>
          { this.renderTodoListRows() }
        </tbody>
      </Table>
    );
  }
}
