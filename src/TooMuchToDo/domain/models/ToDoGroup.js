import { Record } from 'immutable';

export default class ToDo extends Record({
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
