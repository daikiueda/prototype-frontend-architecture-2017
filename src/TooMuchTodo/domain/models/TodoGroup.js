import { Record } from 'immutable';

export default class TodoGroup extends Record({
  id: '',
  title: '',
  description: '',
  toDos: [],
  isSaved: false,
}) {
  isValid() {
    return false;
  }
}
