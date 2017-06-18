import React from 'react';
import { storiesOf } from '@storybook/react';
import { Stage, ConnectedForm } from '../../../../../../.storybook/utils';

import TodoListDetail from '../Detail';
import todoLists from './mocks/todoLists';

storiesOf('TooMuchTodo / models / TodoListDetail')
  .addWithInfo(
    'standard',
    () => (
      <ConnectedForm>
        <Stage>
          <TodoListDetail
            todoList={todoLists[0]}
          />
        </Stage>
      </ConnectedForm>
    ),
    { inline: true, source: false, propTables: [TodoListDetail] },
  );

