import { List } from 'immutable';
import TodoGroup from '../../../domain/models/TodoList';

const todoGroupList = [
  new TodoGroup({
    id: 'TDG-0001',
    title: 'サンプルTODO - 1',
    description: 'サンプルTODO - 1についての説明！記述！',
  }),
  new TodoGroup({
    id: 'TDG-0002',
    title: 'サンプルTODO - 2',
    description: 'サンプルTODO - 2についての説明！記述！',
  }),
];

export default todoGroupList;
