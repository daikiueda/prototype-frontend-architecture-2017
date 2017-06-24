import React from 'react';
import { storiesOf } from '@storybook/react';

import Textarea from '../Textarea';

storiesOf('commons/elements', module)
  .addWithInfo(
    'Textarea',
    () => (
      <div className="stage">
        <p><Textarea /></p>
      </div>
    ),
    { inline: true, source: true, propTables: [Textarea] },
  );

