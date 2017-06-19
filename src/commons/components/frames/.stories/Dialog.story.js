import React from 'react';
import { storiesOf } from '@storybook/react';

import Global from '../Global';
import Dialog from '../Dialog';

storiesOf('commons / frames / Dialog', module)
  .addWithInfo(
    'Show Modal Dialog',
    () => {
      const renderModal = () => (
        <Dialog>
          <div style={{ height: 400, padding: 20 }}>Modal Dialog</div>
        </Dialog>
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
