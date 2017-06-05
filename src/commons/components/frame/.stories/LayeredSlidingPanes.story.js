import React from 'react';
import { storiesOf } from '@storybook/react';

import LayeredSlidingPanes from '../LayeredSlidingPanes';

storiesOf('commons / frame / LayeredSlidingPanes', module)
  .addWithInfo(
    'standard',
    () => (
      <div style={{ height: '400px' }}>
        <LayeredSlidingPanes>
          <div>aaaaa</div>
          <div>bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb </div>
          <div>ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc </div>
        </LayeredSlidingPanes>
      </div>
    ),
    { inline: true, source: true, propTables: [LayeredSlidingPanes] },
  )
  .addWithInfo(
    'standarda',
    () => (
      <div style={{ height: '400px' }}>
        <LayeredSlidingPanes>
          <div>bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb </div>
          <div>ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc </div>
        </LayeredSlidingPanes>
      </div>
    ),
    { inline: true, source: true, propTables: null },
  )
  .addWithInfo(
    'standardaaa',
    () => (
      <div style={{ height: '400px' }}>
        <LayeredSlidingPanes>
          <div>ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc </div>
        </LayeredSlidingPanes>
      </div>
    ),
    { inline: true, source: true, propTables: null },
  );

