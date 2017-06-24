import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button';

storiesOf('commons/elements', module)
  .addWithInfo(
    'Button',
    () => (
      <div className="stage">
        <Button>実行</Button>
      </div>
    ),
    { inline: true, source: true, propTables: [Button] },
  )
  .addWithInfo(
    'Button.Inline',
    () => (
      <div className="stage">
        <p>
          <Button.Inline>Button</Button.Inline><br />
          <Button.Inline>Button</Button.Inline> Text for line-height check.
        </p>
        <p><Button.Inline>Button</Button.Inline></p>
      </div>
    ),
    { inline: true, source: true, propTables: [Button.Inline] },
  );

