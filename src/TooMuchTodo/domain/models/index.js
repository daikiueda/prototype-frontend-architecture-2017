import Todo, { todoSchema } from './Todo';
import TodoList, { todoListSchema } from './TodoList';

export const schemas = new Map([
  [Todo.name, todoSchema],
  [TodoList.name, todoListSchema],
]);

export default {
  Todo,
  TodoList,
};
