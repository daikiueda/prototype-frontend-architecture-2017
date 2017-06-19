import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedForm } from '../../../../../../.storybook/utils';

import TodoListDetail from '../Detail';
import todoLists from './mocks/todoLists';

storiesOf('TooMuchTodo / models / TodoListDetail')
  .addWithInfo(
    'Input Form',
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
    'Read Only',
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

