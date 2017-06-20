import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../commons/components/foundational-styles.scss';

import { selectors as entitiesSelectors } from '../store/modules/entities';
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

const mapStateToProps = (state) => {
  return {
    ...state,
    entities: entitiesSelectors.denormalized(state),
  };
};

export default connect(mapStateToProps)(Root);
