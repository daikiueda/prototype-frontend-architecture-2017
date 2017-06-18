import React from 'react';
import { storiesOf } from '@storybook/react';

import LabeledFieldRow from '../LabeledFieldRow';

storiesOf('commons / form / LabeledFieldRow')
  .addWithInfo(
    'standard',
    () => (
      <div className="stage">
        <LabeledFieldRow label="Label Text">
          (Any Field)
        </LabeledFieldRow>
      </div>
    ),
    { inline: true, source: true, propTables: [LabeledFieldRow] },
  );

