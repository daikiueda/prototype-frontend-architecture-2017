import React from 'react';
import { storiesOf } from '@storybook/react';
import { LIPSUM_JA } from '../../../../../.storybook/utils';

import Global from '../Global';
import Modal from '../Modal';

storiesOf('commons/frames', module)
  .addWithInfo(
    'Global',
    () => {
      return (
        <Global>
          <div className="stage">
            <p>{LIPSUM_JA}</p>
            <p>{LIPSUM_JA}</p>
            <p>{LIPSUM_JA}</p>
          </div>
        </Global>
      );
    },
    { inline: true, source: true, propTables: [Global] },
  )
  .addWithInfo(
    'Global with modal',
    () => {
      const modal = <Modal>Modal Contents</Modal>;

      return (
        <Global modal={modal}>
          <div className="stage">
            <p>{LIPSUM_JA}</p>
            <p>{LIPSUM_JA}</p>
            <p>{LIPSUM_JA}</p>
          </div>
        </Global>
      );
    },
    { inline: true, source: true, propTables: [Global] },
  );

