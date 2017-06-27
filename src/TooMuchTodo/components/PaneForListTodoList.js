import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import models from '../domain/models';
import Button from '../../commons/components/elements/Button';
import TodoListListTable from '../components/models/TodoList/ListTable';

export default class PaneForListTodoList extends React.Component {
  static get propTypes() {
    return {
      handleSubmit: PropTypes.func.isRequired,
      todoLists: PropTypes.arrayOf(PropTypes.instanceOf(models.TodoList)).isRequired,
      onClickCreateTodoList: PropTypes.func.isRequired,
      onClickAddTodoList: PropTypes.func.isRequired,
    };
  }

  render() {
    const { handleSubmit, todoLists } = this.props;
    return (
      <main style={{ padding: 20 }}>
        <form onSubmit={handleSubmit((values) => { console.log(values); })}>
          <div>
            <Button type="button" onClick={this.props.onClickCreateTodoList}>Create</Button>
          </div>
          {/*<div>*/}
            {/*<Button type="button" onClick={this.props.onClickAddTodoList}>Add</Button>*/}
          {/*</div>*/}

          <TodoListListTable todoLists={todoLists} />

          {/*<div>*/}
            {/*<Field component={Button} type="submit" name="action" value="delete">Delete</Field>*/}
          {/*</div>*/}
        </form>
      </main>
    );
  }
}
