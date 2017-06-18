import TodoList from '../../../../../domain/models/TodoList';

const todoLists = [
  new TodoList({
    id: 'TDG-0001',
    title: 'サンプルTODO - 1',
    description: 'サンプルTODO - 1についての説明！記述！',
  }),
  new TodoList({
    id: 'TDG-0002',
    title: 'サンプルTODO - 2',
    description: 'サンプルTODO - 2についての説明！記述！',
  }),
];

export default todoLists;
