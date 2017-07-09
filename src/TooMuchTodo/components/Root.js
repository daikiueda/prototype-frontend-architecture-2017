import React from 'react';
import PropTypes from 'prop-types';

import models from '../domain/models';
import Global from '../../commons/components/frames/Global';
import PaneForListTodoList from '../containers/PaneForListTodoList';
import DialogForCreateTodoList from '../containers/DialogForCreateTodoList';

import '../../commons/components/foundational-styles.scss';

export default class Root extends React.Component {
  static get propTypes() {
    return {
      // entities: PropTypes.object.isRequired,
      client: PropTypes.object,
      // ui: PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      client: {},
    };
  }

  conductDialogs() {
    const dialogs = [];

    switch (this.props.client.plan) {
      case models.TodoList:
        dialogs.push(<DialogForCreateTodoList />);
        break;

      default:
    }

    return dialogs.length ? dialogs : null;
  }

  render() {
    return (
      <Global modal={this.conductDialogs()} >
        <PaneForListTodoList />
      </Global>
    );
  }
}
