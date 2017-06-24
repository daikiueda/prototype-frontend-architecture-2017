import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedForm } from '../../../../../../.storybook/utils';

import TodoListListTable from '../ListTable';
import todoLists from './mocks/todoLists';

storiesOf('TooMuchTodo/models', module)
  .addWithInfo(
    'TodoListListTable',
    () => (
      <ConnectedForm>
        <div className="stage">
          <TodoListListTable
            todoLists={todoLists}
          />
        </div>
      </ConnectedForm>
    ),
    { inline: true, source: false, propTables: [TodoListListTable] },
  );

