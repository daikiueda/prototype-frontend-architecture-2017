import { Record } from 'immutable';

export default class Todo extends Record({
  id: '',
  title: '',
  description: '',
  isFinished: false,
  isSaved: false,
}) {
  isValid() {
    return false;
  }
}
