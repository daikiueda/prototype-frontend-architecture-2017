import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ToDoGroupList from '../components/TodoGroupList';

import { actions } from '../store/reducer/entities/todoGroups';

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
        <button onClick={() => dispatch(actions.createTodoGroup({ id: Date.now() }))}>Add</button>
        <ToDoGroupList toDoGroups={entities.todoGroups} />
      </main>
    );
  }
}

export default connect((state) => state)(Root);
