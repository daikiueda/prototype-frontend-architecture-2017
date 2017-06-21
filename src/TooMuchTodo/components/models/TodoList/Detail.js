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

    // TODO: 無様な二重化をなんとかしたい
    const content = isReadOnly
      ? [
        <LabeledFieldRow key="title" label="Title">{todoList.title}</LabeledFieldRow>,
        <LabeledFieldRow key="description" label="Description">{todoList.description}</LabeledFieldRow>,
      ]
      : [
        <Field key="title" name="title" label="Title" component={renderFieldRow.Input} type="text" />,
        <Field key="description" name="description" label="Description" component={renderFieldRow.Textarea} />,
      ];

    return (
      <div>{content}</div>
    );
  }
}
