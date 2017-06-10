import Todo, { todoSchema } from './Todo';
import TodoList, { todoListSchema } from './TodoList';

export default new Map([
  [Todo.name, todoSchema],
  [TodoList.name, todoListSchema],
]);
