import React from 'react';
import PropTypes from 'prop-types';
import immutable from 'immutable';

export default class Table extends React.Component {
  static get propTypes() {
    return {
      todoListEntities: PropTypes.shape({
        byId: PropTypes.oneOfType([
          PropTypes.instanceOf(immutable.Map),
          PropTypes.instanceOf(Map),
        ]),
      }),
    };
  }

  static get defaultProps() {
    return {
      todoListEntities: { byId: new Map(), allIds: new Set() },
    };
  }

  // constructor(props) {
  //   super(props);
  //   this.renderTodoListRows = this.renderTodoListRows.bind(this);
  // }

  renderTodoListRows() {
    const rows = [];
    this.props.todoListEntities.byId.forEach((todoList) => {
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
