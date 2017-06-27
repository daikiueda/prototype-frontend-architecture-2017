import { Record, List } from 'immutable';
import { schema } from 'normalizr';

import { todoSchema } from './Todo';

export const todoListSchema = new schema.Entity('TodoList', { todos: [todoSchema] });

export default class TodoList extends Record({
  id: '',
  title: '',
  description: '',
  todos: List(),
  isSaved: false,
}) {
  constructor(props) {
    const { todos, ...restProps } = props;
    super({
      todos: List(todos),
      ...restProps,
    });
  }

  save() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }
}
