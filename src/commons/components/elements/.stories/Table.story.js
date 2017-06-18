import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from '../Table';

storiesOf('commons / elements / Table')
  .addWithInfo(
    'standard',
    () => (
      <div className="stage">
        <Table>
          <tbody><tr><td>aaa</td></tr></tbody>
        </Table>
      </div>
    ),
    { inline: true, source: true, propTables: [Table] },
  );

