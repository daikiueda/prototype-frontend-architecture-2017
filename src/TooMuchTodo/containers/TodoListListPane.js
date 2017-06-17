import React from 'react';
import PropTypes from 'prop-types';

import models from '../domain/models';
import { actions as entitiesActions } from '../store/modules/entities';

import TodoListListTable from '../components/TodoList/ListTable';

export default class TodoListListPane extends React.Component {
  static get propTypes() {
    return {
      todoLists: PropTypes.arrayOf(PropTypes.instanceOf(models.TodoList)),
      selectedIds: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])),
    };
  }

  static get defaultProps() {
    return {
      todoLists: [],
      selectedIds: [],
    };
  }

  render() {
    const { dispatch, todoLists, selectedIds } = this.props;
    return (
      <main style={{ padding: 20 }}>
        <button onClick={() => dispatch(entitiesActions.create(models.TodoList))}>Add</button>
        <TodoListListTable todoLists={todoLists} selectedIds={selectedIds} />
      </main>
    );
  }
}
