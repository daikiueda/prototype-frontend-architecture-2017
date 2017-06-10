import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import models from '../domain/models';
import { actions as entitiesActions } from '../store/modules/entities';

import TodoListTable from '../components/TodoList/Table';

class Root extends React.PureComponent {
  static get propTypes() {
    return {
      entities: PropTypes.object.isRequired,
      // ui: PropTypes.object.isRequired,
    };
  }

  render() {
    const { dispatch, entities } = this.props;
    return (
      <main>
        <button onClick={() => dispatch(entitiesActions.create(models.TodoList))}>Add</button>
        <TodoListTable todoListEntities={entities.get('TodoList')} />
      </main>
    );
  }
}

export default connect((state) => state)(Root);
