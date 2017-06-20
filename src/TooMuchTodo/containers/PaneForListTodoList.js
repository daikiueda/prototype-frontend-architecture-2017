import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import models from '../domain/models';
import {
  actions as entitiesActions,
  selectors as entitiesSelectors,
} from '../store/modules/entities';

import TodoListListTable from '../components/models/TodoList/ListTable';

class PaneForListTodoList extends React.Component {
  static get propTypes() {
    return {
      handleSubmit: PropTypes.func.isRequired,
      todoLists: PropTypes.arrayOf(PropTypes.instanceOf(models.TodoList)),
    };
  }

  static get defaultProps() {
    return {
      todoLists: [],
    };
  }

  render() {
    const { dispatch, handleSubmit, todoLists } = this.props;
    return (
      <main style={{ padding: 20 }}>
        <form onSubmit={handleSubmit((values) => { console.log(values); })}>
          <button type="button" onClick={() => dispatch(entitiesActions.create(models.TodoList))}>Add</button>
          <TodoListListTable todoLists={todoLists} />
          <Field component="button" type="submit" name="action" value="delete">Delete</Field>
        </form>
      </main>
    );
  }
}

export default connect(
  (state) => ({
    todoLists: entitiesSelectors.denormalized(state).TodoList,
  }),
)(reduxForm({
  form: 'PaneForListTodoList',
  pure: false,
})(PaneForListTodoList));
