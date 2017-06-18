import React from 'react';
import { storiesOf } from '@storybook/react';
import { Stage, ConnectedForm } from '../../../../../../.storybook/utils';

import TodoListListTable from '../ListTable';
import todoLists from './mocks/todoLists';

storiesOf('TooMuchTodo / models / TodoListDetail')
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

