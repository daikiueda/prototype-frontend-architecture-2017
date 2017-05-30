import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// /* eslint-enable import/no-extraneous-dependencies */

import ToDoGroupList from '../ToDoGroupList';

import toDoGroupList from './mockes/toDoGroupList';

storiesOf('TooMuchToDo / ToDoGroupList', module)
  .addWithInfo(
    'standard',
    () => (
      <ToDoGroupList
        toDoGroups={toDoGroupList}
      />
    ),
    { inline: true, source: true, propTables: [ToDoGroupList] },
  );

