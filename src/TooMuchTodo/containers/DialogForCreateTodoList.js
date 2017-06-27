import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import TodoListApp from '../event-handlers/TodoListApp';
import DialogForCreateTodoList from '../components/DialogForCreateTodoList';

const ConnectedComponent = connect(
  (state, props) => ({
    handleSubmit: props.handleSubmit,
  }),
  (dispatch, props) => {
    const todoListApp = new TodoListApp(dispatch, props);

    return {
      onSubmit: props.handleSubmit((values) => todoListApp.createTodoList(values)),
      onClickCloseButton: () => todoListApp.abortCreation(),
    };
  },
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
