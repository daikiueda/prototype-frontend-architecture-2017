import { List } from 'immutable';
import ToDoGroup from '../../../domain/models/ToDoGroup';

const toDoGroupList = List([
  new ToDoGroup({
    id: 'TDG-0001',
    title: 'サンプルTODO - 1',
    description: 'サンプルTODO - 1についての説明！記述！',
  }),
  new ToDoGroup({
    id: 'TDG-0002',
    title: 'サンプルTODO - 2',
    description: 'サンプルTODO - 2についての説明！記述！',
  }),
]);

export default toDoGroupList;
