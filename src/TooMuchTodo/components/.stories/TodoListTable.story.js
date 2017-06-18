import React from 'react';
import { storiesOf } from '@storybook/react';
import { Stage, ConnectedForm } from '../../../../.storybook/utils';

import TodoListListTable from '../TodoList/ListTable';
import todoLists from './mocks/todoLists';

storiesOf('TooMuchTodo / TodoListListTable', module)
  .addWithInfo(
    'standard',
    () => (
      <ConnectedForm>
        <Stage>
          <TodoListListTable
            todoLists={todoLists}
          />
        </Stage>
      </ConnectedForm>
    ),
    { inline: true, source: false, propTables: [TodoListListTable] },
  );

