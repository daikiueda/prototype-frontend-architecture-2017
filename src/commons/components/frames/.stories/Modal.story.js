import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '../Modal';

storiesOf('commons/frames', module)
  .addWithInfo(
    'Modal',
    () => (
      <Modal>Modal Content</Modal>
    ),
    { inline: true, source: true, propTables: [Modal] },
  );
