import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Modal from '../../commons/components/frames/Modal';
import Dialog from '../../commons/components/frames/Dialog';
import TodoListDetail from '../components/models/TodoList/Detail';

class DialogForCreateTodoList extends React.Component {
  static get propTypes() {
    return {
      handleSubmit: PropTypes.func.isRequired,
    };
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Modal>
        <Dialog>
          <form onSubmit={handleSubmit((values) => { console.log(values); })}>
            <TodoListDetail />
          </form>
        </Dialog>
      </Modal>
    );
  }
}

export default connect()(reduxForm({
  form: 'DialogForCreateTodoList',
  pure: false,
})(DialogForCreateTodoList));
