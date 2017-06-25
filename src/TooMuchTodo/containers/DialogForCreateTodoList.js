import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import DialogForCreateTodoList from '../components/DialogForCreateTodoList';

export default connect(
  null,
  (dispatch) => ({
    onSubmit: (values) => { console.log(1, values); dispatch({ type: 'SUBMITTED' }); },
  }),
)(reduxForm({
  form: 'DialogForCreateTodoList',
  pure: false,
})(DialogForCreateTodoList));
