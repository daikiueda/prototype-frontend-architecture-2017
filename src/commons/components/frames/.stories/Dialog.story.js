import React from 'react';
import { storiesOf } from '@storybook/react';
import { LIPSUM } from '../../../../../.storybook/utils';

import Global from '../Global';
import Dialog from '../Dialog';

storiesOf('commons/frames', module)
  .addWithInfo(
    'Dialog',
    () => {
      const renderModal = () => (
        <Dialog>
          <div>
            <p><strong>Modal Dialog</strong></p>
            <p>{LIPSUM}</p>
            <p>{LIPSUM}</p>
            <p>{LIPSUM}</p>
            <p>{LIPSUM}</p>
            <p>{LIPSUM}</p>
          </div>
        </Dialog>
      );

      return (
        <div style={{height: '400px'}}>
          <Global renderModal={renderModal}>
            <div style={{ padding: '80px 20px' }}>
              <div style={{ fontSize: '2em' }}>Opener Content</div>
              <p>{LIPSUM}</p>
              <p>{LIPSUM}</p>
            </div>
          </Global>
        </div>
      );
    },
    { inline: true, source: true, propTables: [Global] },
  );
