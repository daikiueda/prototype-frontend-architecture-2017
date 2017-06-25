import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray } from 'redux-form';

import Table from '../../../../commons/components/elements/Table';
import TodoList from '../../../domain/models/TodoList';

export default class ListTable extends React.Component {
  static get propTypes() {
    return {
      todoLists: PropTypes.arrayOf(PropTypes.instanceOf(TodoList)),
    };
  }

  static get defaultProps() {
    return {
      todoLists: [],
    };
  }

  constructor(props) {
    super(props);
    this.renderTodoListTableBody = this.renderTodoListTableBody.bind(this);
  }

  renderTodoListTableRow(todoList, isChecked, fieldArrayName) {
    const rowId = `${fieldArrayName}.id:${todoList.id}`;
    return (
      <tr
        key={rowId}
        className={isChecked ? Table.CLASS_NAME.TR.CHECKED : ''}
      >
        <td>
          <Field
            name={rowId}
            component="input"
            type="checkbox"
          />
        </td>
        <td>{todoList.title}</td>
        <td>{todoList.description}</td>
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

  renderTodoListTableBody({ fields }) {
    const { todoLists } = this.props;
    const fieldArrayName = fields.name;
    return (
      <tbody>{
        todoLists.map((todoList) => this.renderTodoListTableRow(
          todoList,
          fields.get(`id:${todoList.id}`),
          fieldArrayName,
        ))
      }</tbody>
    );
  }

  render() {
    if (!this.props.todoLists || !this.props.todoLists.length) {
      return null;
    }

    return (
      <Table>
        <FieldArray name="checked" component={this.renderTodoListTableBody} />
      </Table>
    );
  }
}
