import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// /* eslint-enable import/no-extraneous-dependencies */

import TodoGroupList from '../TodoGroupList';

import todoGroupList from './mockes/todoGroupList';

storiesOf('TooMuchTodo / TodoGroupList', module)
  .addWithInfo(
    'standard',
    () => (
      <TodoGroupList
        toDoGroups={todoGroupList}
      />
    ),
    { inline: true, source: true, propTables: [TodoGroupList] },
  );

