import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '../Table';

storiesOf('commons / elements / Table', module)
  .addWithInfo(
    'standard',
    () => (
      <Table>
        <tbody><tr><td>aaa</td></tr></tbody>
      </Table>
    ),
    { inline: true, source: true, propTables: [Table] },
  );

