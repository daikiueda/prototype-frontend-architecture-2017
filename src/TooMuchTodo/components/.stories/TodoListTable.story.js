import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import TodoListTable from '../TodoList/Table';

import todoLists from './mocks/todoLists';

storiesOf('TooMuchTodo / TodoListTable', module)
  .addWithInfo(
    'standard',
    () => (
      <TodoListTable
        todoLists={todoLists}
      />
    ),
    { inline: true, source: true, propTables: [TodoListTable] },
  );

