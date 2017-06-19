/* There methods are depended on 'Redux Form' */

import React from 'react';
import PropTypes from 'prop-types';
import { fieldInputPropTypes, fieldMetaPropTypes } from 'redux-form';
import LabeledFieldRow from './LabeledFieldRow';
import InputElm from '../elements/Input';
import TextareaElm from '../elements/Textarea';

const renderError = ({ touched, error, warning }) => {
  if (!touched) {
    return null;
  }

  const messages = [];

  if (error) {
    messages.push(<p>{error}</p>);
  }

  if (warning) {
    messages.push(<p>{warning}</p>);
  }

  return messages;
};

export const Input = ({ input, meta, label, type }) => {
  const fieldId = `field-${input.name}`;
  return (
    <LabeledFieldRow label={label} htmlFor={fieldId}>
      <InputElm {...input} type={type} id={fieldId} />
      {renderError(meta)}
    </LabeledFieldRow>
  );
};
Input.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  type: PropTypes.string.isRequired,
};

export const Textarea = ({ input, meta, label }) => {
  const fieldId = `field-${input.name}`;
  return (
    <LabeledFieldRow label={label} htmlFor={fieldId}>
      <TextareaElm {...input} id={fieldId} />
      {renderError(meta)}
    </LabeledFieldRow>
  );
};
Textarea.propTypes = {
  input: PropTypes.shape(fieldInputPropTypes).isRequired,
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

export default {
  Input,
  Textarea,
};
