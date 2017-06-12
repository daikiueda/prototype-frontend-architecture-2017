import React from 'react';
import { storiesOf } from '@storybook/react';

import TodoListListTable from '../TodoList/ListTable';

import todoLists from './mocks/todoLists';

storiesOf('TooMuchTodo / TodoListListTable', module)
  .addWithInfo(
    'standard',
    () => (
      <TodoListListTable
        todoLists={todoLists}
      />
    ),
    { inline: true, source: true, propTables: [TodoListListTable] },
  );

