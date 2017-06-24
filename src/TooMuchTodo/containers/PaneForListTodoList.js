import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import models from '../domain/models';
import {
  actions as entitiesActions,
  selectors as entitiesSelectors,
} from '../store/modules/entities';
import PaneForListTodoList from '../components/PaneForListTodoList';

export default connect(
  (state) => ({
    todoLists: entitiesSelectors.denormalized(state).TodoList || [],
  }),
  (dispatch) => ({
    onClickAddTodoList: () => dispatch(entitiesActions.create(models.TodoList)),
  }),
)(reduxForm({
  form: 'PaneForListTodoList',
  pure: false,
})(PaneForListTodoList));
