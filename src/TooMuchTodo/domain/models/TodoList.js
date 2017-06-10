import { Record, List } from 'immutable';

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

  isValid() {
    return false;
  }
}
