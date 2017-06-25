import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../commons/components/frames/Modal';
import Dialog from '../../commons/components/frames/Dialog';
import Button from '../../commons/components/elements/Button';
import TodoListDetail from './models/TodoList/Detail';

export default class DialogForCreateTodoList extends React.Component {
  static get propTypes() {
    return {
      handleSubmit: PropTypes.func.isRequired,
    };
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Modal>
          <Dialog
            footer={<Button>Add</Button>}
            footerAside={<Button type="button">Close</Button>}
          >
            <TodoListDetail />
          </Dialog>
        </Modal>
      </form>
    );
  }
}
