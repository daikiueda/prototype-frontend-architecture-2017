import models from '../domain/models';

import { actions as waitingActions } from '../../commons/store/modules/ui/waiting';
import { actions as entitiesActions } from '../store/modules/entities';
import { actions as planActions } from '../store/modules/client/plan';

export default class TodoListApp {
  constructor(dispatch, props) {
    this.dispatch = dispatch;
    this.props = props;
  }

  createTodoList(todoListSrc) {
    const todoList = new models.TodoList(todoListSrc);

    this.dispatch(waitingActions.start());

    todoList.save()
      .then(() => {
        this.dispatch(entitiesActions.add(todoList));
        this.dispatch(waitingActions.end());
        this.abortCreation();
      });
  }

  abortCreation() {
    this.dispatch(planActions.abort());
  }
}
