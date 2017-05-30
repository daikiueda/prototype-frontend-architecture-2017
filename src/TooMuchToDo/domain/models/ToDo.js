import { Record } from 'immutable';

export default class ToDo extends Record({
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
