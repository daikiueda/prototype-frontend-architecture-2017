import models from '../domain/models';

import { actions as waitingActions } from '../../commons/store/modules/ui/waiting';
import { actions as entitiesActions } from '../store/modules/entities';
import { actions as planActions } from '../store/modules/client/plan';

export default class TodoListApp {
  static createTodoList(dispatch, todoListSrc) {
    const todoList = new models.TodoList(todoListSrc);

    dispatch(waitingActions.start());

    todoList.save()
      .then(() => {
        dispatch(entitiesActions.add(todoList));
        dispatch(waitingActions.end());
        this.abortCreation(dispatch);
      });
  }

  static abortCreation(dispatch) {
    dispatch(planActions.abort());
  }
}
