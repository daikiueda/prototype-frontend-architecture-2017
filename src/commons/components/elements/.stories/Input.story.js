import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from '../Input';

storiesOf('commons/elements', module)
  .addWithInfo(
    'Input',
    () => (
      <div className="stage">
        <p><Input type="text"/></p>
      </div>
    ),
    { inline: true, source: true, propTables: [Input] },
  );

