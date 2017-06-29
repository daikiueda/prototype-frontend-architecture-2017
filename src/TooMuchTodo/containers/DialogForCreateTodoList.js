import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import TodoListApp from '../event-handlers/TodoListApp';
import DialogForCreateTodoList from '../components/DialogForCreateTodoList';

const ConnectedComponent = connect(
  (state, props) => ({
    handleSubmit: props.handleSubmit,
  }),
  (dispatch, props) => ({
    onSubmit: props.handleSubmit((values) => TodoListApp.createTodoList(dispatch, values)),
    onClickCloseButton: () => TodoListApp.abortCreation(dispatch),
  }),
)(DialogForCreateTodoList);

export default connect(
  (state) => ({
    initialValues: state.null,
    // initialValues: { title: 'hoge', description: 'Description' },
  }),
)(reduxForm({
  form: 'DialogForCreateTodoList',
  pure: false,
})(ConnectedComponent));
