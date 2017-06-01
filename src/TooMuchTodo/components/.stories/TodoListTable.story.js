import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// /* eslint-enable import/no-extraneous-dependencies */

import TodoListTable from '../TodoList/Table';

import todoLists from './mockes/todoLists';

storiesOf('TooMuchTodo / TodoListTable', module)
  .addWithInfo(
    'standard',
    () => (
      <TodoListTable
        toDoGroups={todoLists}
      />
    ),
    { inline: true, source: true, propTables: [TodoListTable] },
  );

