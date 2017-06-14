import React from 'react';
import { storiesOf } from '@storybook/react';

import Global from '../Global';

storiesOf('commons / frame / Global', module)
  .addWithInfo(
    'Show Modal Contents',
    () => {
      const renderModal = () => (
        <div>Modal Contents</div>
      );

      return (
        <div style={{height: '400px'}}>
          <Global renderModal={renderModal}>
            <div>aaaaa</div>
            <div>bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb
              bbbbb bbbbb bbbbb bbbbb bbbbb
            </div>
            <div>ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc
              ccccc ccccc ccccc ccccc
            </div>
          </Global>
        </div>
      );
    },
    { inline: true, source: true, propTables: [Global] },
  );
