import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { actions as planActions } from '../store/modules/client/plan';
import DialogForCreateTodoList from '../components/DialogForCreateTodoList';

const buildHandlerOnSubmit = (dispatch, props) => props.handleSubmit((values) => {
  console.log('Submitted!', values);
  dispatch({ type: 'SUBMITTED', payload: values });
});

const ConnectedComponent = connect(
  (state, props) => ({
    handleSubmit: props.handleSubmit,
  }),
  (dispatch, props) => ({
    onSubmit: buildHandlerOnSubmit(dispatch, props),
    onClickCloseButton: () => dispatch(planActions.abort()),
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
