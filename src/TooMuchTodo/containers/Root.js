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

  constructor(props) {
    super(props);
    this.state = { panes: 1 };

    this.addPane = this.addPane.bind(this);
    this.removePane = this.removePane.bind(this);
  }

  addPane() {
    this.setState({
      panes: this.state.panes + 1,
    });
  }

  removePane() {
    this.setState({
      panes: this.state.panes - 1,
    });
  }

  render() {
    const { dispatch, entities } = this.props;

    const panes = [];
    panes.push(
      <div key="hoge">
        <button onClick={() => dispatch(actions.createTodoList({ id: Date.now() }))}>Add</button>
        <TodoListTable todoLists={entities.todoList.toArray()} />
      </div>,
    );
    for (let i = 0; i < this.state.panes; i++) {
      panes.push(<div key={i}>{i}</div>);
    }

    return (
      <main style={{ height: 400 }}>
        <button onClick={this.addPane}>Add Pane</button>
        <button onClick={this.removePane}>Remove Pane</button>
        <LayeredSlidingPanes>
          {panes}
        </LayeredSlidingPanes>
      </main>
    );
  }
}

export default connect((state) => state)(Root);
