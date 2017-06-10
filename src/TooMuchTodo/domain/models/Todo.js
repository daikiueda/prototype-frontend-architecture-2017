import { Record } from 'immutable';
import { schema } from 'normalizr';

export const todoSchema = new schema.Entity('Todo');

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
