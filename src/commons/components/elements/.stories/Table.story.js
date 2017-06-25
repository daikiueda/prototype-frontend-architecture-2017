import React from 'react';
import { storiesOf } from '@storybook/react';
import { LIPSUM } from '../../../../../.storybook/utils';

import Table from '../Table';

storiesOf('commons/elements', module)
  .addWithInfo(
    'Table',
    () => (
      <div className="stage" style={{ display: 'flex' }}>
        <Table>
          <tbody>
            <tr><td>AAAA</td></tr>
            <tr><td>BBBB</td></tr>
            <tr><td>CCCC</td></tr>
            <tr><td>DDDD</td></tr>
            <tr><td>EEEE</td></tr>
            <tr><td>FFFF</td></tr>
          </tbody>
        </Table>
        <div style={{ width: 300, paddingLeft: 14 }}>
          <p>{LIPSUM}</p>
        </div>
      </div>
    ),
    { inline: true, source: true, propTables: [Table] },
  );

