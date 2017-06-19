import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field } from 'redux-form';
import { ConnectedForm } from '../../../../../.storybook/utils';

import renderFieldRow from '../renderFieldRow';

storiesOf('commons / form / renderFieldRow')
  .addWithInfo(
    'Input',
    () => (
      <div className="stage">
        <ConnectedForm>
          <Field
            name="sample-input-text"
            component={renderFieldRow.Input}
            type="text"
            label="input[type=text]"
          />
        </ConnectedForm>
      </div>
    ),
    { inline: true, source: true, propTables: null },
  )
  .addWithInfo(
    'Textarea',
    () => (
      <div className="stage">
        <ConnectedForm>
          <Field
            name="sample-textarea"
            component={renderFieldRow.Textarea}
            label="textarea"
          />
        </ConnectedForm>
      </div>
    ),
    { inline: true, source: true, propTables: null },
  );

