import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';

import models from '../domain/models';
import { actions as entitiesActions } from '../store/modules/entities';

import TodoListListTable from '../components/models/TodoList/ListTable';

class TodoListListPane extends React.Component {
  static get propTypes() {
    return {
      ...reduxFormPropTypes,
      todoLists: PropTypes.arrayOf(PropTypes.instanceOf(models.TodoList)),
    };
  }

  static get defaultProps() {
    return {
      todoLists: [],
      selectedIds: [],
    };
  }

  render() {
    const { dispatch, handleSubmit, todoLists } = this.props;
    return (
      <main style={{ padding: 20 }}>
        <form onSubmit={handleSubmit((values) => { console.log(values); })}>
          <button onClick={() => dispatch(entitiesActions.create(models.TodoList))}>Add</button>
          <TodoListListTable todoLists={todoLists} />
          <Field component="button" type="submit" name="action" value="delete">Delete</Field>
        </form>
      </main>
    );
  }
}

export default reduxForm({
  form: 'TodoListListPane',
  pure: false,
})(TodoListListPane);
