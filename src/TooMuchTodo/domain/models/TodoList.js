import { Record } from 'immutable';

export default class TodoList extends Record({
  id: '',
  title: '',
  description: '',
  todos: [],
  isSaved: false,
}) {
  isValid() {
    return false;
  }
}
