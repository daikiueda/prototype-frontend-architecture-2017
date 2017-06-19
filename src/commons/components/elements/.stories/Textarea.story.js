import React from 'react';
import { storiesOf } from '@storybook/react';

import Textarea from '../Textarea';

storiesOf('commons / elements / Textarea')
  .addWithInfo(
    'standard',
    () => (
      <div className="stage">
        <p><Textarea /></p>
      </div>
    ),
    { inline: true, source: true, propTables: [Textarea] },
  );

