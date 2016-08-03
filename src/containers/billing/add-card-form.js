import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import AddCardPanel from 'components/billing/add-card-panel';

@reduxForm({
  form: 'CreditCard',
  fields: [
    'firstName',
    'lastName',
    'telephone',
    'streetAddress',
    'city',
    'state',
    'zip',
    'country',
    'ccNumber',
    'ccExp',
    'cvv',
    'ccName'
  ]
})

export default class AddCardForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const {
      fields,
    } = this.props;

    return (
      <AddCardPanel fields={fields} />
    )
  }
}