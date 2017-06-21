import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import LabeledFieldRow from '../../../../commons/components/form/LabeledFieldRow';
import renderFieldRow from '../../../../commons/components/form/renderFieldRow';
import TodoList from '../../../domain/models/TodoList';

export default class Detail extends React.Component {
  static get propTypes() {
    return {
      todoList: PropTypes.instanceOf(TodoList),
      isReadOnly: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      todoList: null,
      isReadOnly: false,
    };
  }

  render() {
    const { todoList, isReadOnly } = this.props;
    const content = isReadOnly
      ? [
        <LabeledFieldRow label="Title">{todoList.title}</LabeledFieldRow>,
        <LabeledFieldRow label="Description">{todoList.description}</LabeledFieldRow>,
      ]
      : [
        <Field name="title" label="Title" component={renderFieldRow.Input} type="text" />,
        <Field name="description" label="Description" component={renderFieldRow.Textarea} />,
      ];

    return (
      <div>{content}</div>
    );
  }
}
