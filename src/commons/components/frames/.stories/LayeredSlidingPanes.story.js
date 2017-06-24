import React from 'react';
import { storiesOf } from '@storybook/react';

import LayeredSlidingPanes from '../LayeredSlidingPanes';

storiesOf('commons/frames', module)
  .addWithInfo(
    'LayeredSlidingPanes (3 Panes)',
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
    'LayeredSlidingPanes (2 Panes)',
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
    'LayeredSlidingPanes (1 pane)',
    () => (
      <div style={{ height: '400px' }}>
        <LayeredSlidingPanes>
          <div>ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc </div>
        </LayeredSlidingPanes>
      </div>
    ),
    { inline: true, source: true, propTables: null },
  );

