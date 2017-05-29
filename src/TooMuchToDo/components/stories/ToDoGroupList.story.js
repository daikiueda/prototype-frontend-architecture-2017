import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable import/no-extraneous-dependencies */

import ToDoGroupList from '../ToDoGroupList';

storiesOf('ToDoGroupList', module)
  .addWithInfo(
    'standard',
    () => (
      <ToDoGroupList />
    ),
    { inline: true, source: true, propTables: [ToDoGroupList] },
  );

