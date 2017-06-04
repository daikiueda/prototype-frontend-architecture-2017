import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LayeredSlidingPanes from '../../commons/components/frame/LayeredSlidingPanes';
import TodoListTable from '../components/TodoList/Table';

import { actions } from '../store/modules/entities/todoLists';

class Root extends React.PureComponent {
  static get propTypes() {
    return {
      entities: PropTypes.object.isRequired,
      // requests: PropTypes.object.isRequired,
    };
  }

  render() {
    const { dispatch, entities } = this.props;
    return (
      <main>
        <LayeredSlidingPanes />
        <button onClick={() => dispatch(actions.createTodoList({ id: Date.now() }))}>Add</button>
        <TodoListTable todoLists={entities.todoList} />
      </main>
    );
  }
}

export default connect((state) => state)(Root);
