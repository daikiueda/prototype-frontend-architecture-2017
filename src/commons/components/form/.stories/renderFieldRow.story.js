import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field } from 'redux-form';
import { ConnectedForm } from '../../../../../.storybook/utils';

import renderFieldRow from '../renderFieldRow';

storiesOf('commons/form', module)
  .addWithInfo(
    'renderFieldRow.Input',
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
    'renderFieldRow.Textarea',
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

