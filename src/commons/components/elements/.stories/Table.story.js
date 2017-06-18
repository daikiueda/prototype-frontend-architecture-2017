import React from 'react';
import { storiesOf } from '@storybook/react';
import { Stage } from '../../../../../.storybook/utils';

import Table from '../Table';

storiesOf('commons / elements / Table')
  .addWithInfo(
    'standard',
    () => (
      <Stage>
        <Table>
          <tbody><tr><td>aaa</td></tr></tbody>
        </Table>
      </Stage>
    ),
    { inline: true, source: true, propTables: [Table] },
  );

