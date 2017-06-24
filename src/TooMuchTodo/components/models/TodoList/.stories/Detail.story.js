import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedForm } from '../../../../../../.storybook/utils';

import TodoListDetail from '../Detail';
import todoLists from './mocks/todoLists';

storiesOf('TooMuchTodo/models', module)
  .addWithInfo(
    'TodoListDetail (Input Form)',
    () => (
      <div className="stage">
        <ConnectedForm>
          <TodoListDetail
            isReadOnly={false}
            todoList={todoLists[0]}
          />
        </ConnectedForm>
      </div>
    ),
    { inline: true, source: false, propTables: [TodoListDetail] },
  )
  .addWithInfo(
    'TodoListDetail (Read Only)',
    () => (
      <div className="stage">
        <ConnectedForm>
          <TodoListDetail
            isReadOnly={true}
            todoList={todoLists[0]}
          />
        </ConnectedForm>
      </div>
    ),
    { inline: true, source: false, propTables: [TodoListDetail] },
  );

