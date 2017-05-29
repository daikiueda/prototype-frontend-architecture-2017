import { Record } from 'immutable';

export default class ToDo extends Record({
  id: '',
  title: '',
  description: '',
  isFinished: false,
}) {
  isValid() {
    return false;
  }
}
