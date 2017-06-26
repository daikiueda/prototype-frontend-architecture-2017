import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../commons/components/foundational-styles.scss';

import models from '../domain/models';
import { selectors as entitiesSelectors } from '../store/modules/entities';
import Global from '../../commons/components/frames/Global';
import PaneForListTodoList from './PaneForListTodoList';
import DialogForCreateTodoList from './DialogForCreateTodoList';

class Root extends React.Component {
  static get propTypes() {
    return {
      entities: PropTypes.object.isRequired,
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

const mapStateToProps = (state) => {
  return {
    ...state,
    entities: entitiesSelectors.denormalized(state),
  };
};

export default connect(mapStateToProps)(Root);
