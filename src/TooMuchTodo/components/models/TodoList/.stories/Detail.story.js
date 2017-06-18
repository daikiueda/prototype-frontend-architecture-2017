import React from 'react';
import { storiesOf } from '@storybook/react';
import { ConnectedForm } from '../../../../../../.storybook/utils';

import TodoListDetail from '../Detail';
import todoLists from './mocks/todoLists';

storiesOf('TooMuchTodo / models / TodoListDetail')
  .addWithInfo(
    'standard',
    () => (
      <ConnectedForm>
        <div className="stage">
          <TodoListDetail
            todoList={todoLists[0]}
          />
        </div>
      </ConnectedForm>
    ),
    { inline: true, source: false, propTables: [TodoListDetail] },
  );

