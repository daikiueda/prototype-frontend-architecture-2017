import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { denormalize } from 'normalizr';

import { schemas } from '../domain/models';
import '../../commons/components/foundational-styles.scss';
import Global from '../../commons/components/frames/Global';
import Dialog from '../../commons/components/frames/Dialog';
import TodoListListPane from './TodoListListPane';

class Root extends React.Component {
  static get propTypes() {
    return {
      entities: PropTypes.object.isRequired,
      // ui: PropTypes.object.isRequired,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  render() {
    const { dispatch, entities } = this.props;
    return (
      <Global
        renderModal={() => (
          this.state.modal
            ? <Dialog><div style={{ height: 400 }}>Show Modal Contents</div></Dialog>
            : null
        )}
      >
        <button onClick={() => { this.setState({ modal: true }); }}>Show Modal Contents</button>
        <TodoListListPane todoLists={entities.TodoList} dispatch={dispatch} />
      </Global>
    );
  }
}

// TODO: commonsに置くべきものにできそう？
// TODO: テストを書かないと不安
const pickEntitiesAndSchemas = (allEntities) => {
  const entityNames = allEntities.keySeq().toArray();
  return entityNames.reduce((pickedEntitiesAndSchemes, entityName) => {
    // e.g. { users: [ 1, 2 ] }
    pickedEntitiesAndSchemes[0][entityName]
      = Array.from(allEntities.get(entityName) || new Map()).map(([key]) => key);

    // e.g. { users: [new schema.Entity('users')] }
    pickedEntitiesAndSchemes[1][entityName] = [schemas.get(entityName)];
    return pickedEntitiesAndSchemes;
  }, [{}, {}]);
};

const mapStateToProps = (state) => {
  const { entities, ...restProps } = state;
  return {
    ...restProps,
    entities: denormalize(
      ...pickEntitiesAndSchemas(entities),
      fromJS(entities),
    ),
  };
};

export default connect(mapStateToProps)(Root);
