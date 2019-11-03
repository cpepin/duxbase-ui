import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';
import { splitFormProps, useField } from 'react-form';
import classnames from 'classnames';

import FieldAlert from '../FieldAlert';

function TextField(props, ref) {
  const [field, fieldOptions, rest] = splitFormProps(props);
  const { class: className, id, label } = rest;

  // strip label prop
  delete rest.label;

  const {
    meta: { error, isTouched },
    getInputProps,
  } = useField(field, fieldOptions);

  const displayError = isTouched && error;
  const classes = classnames({ 'input--error': displayError }, className);
  const errorId = `${id}-error`;

  return (
    <Fragment>
      <label for={id}>{label}</label>
      <input {...getInputProps({ ref, ...rest })} class={classes} />
      {displayError && <FieldAlert id={errorId}>{error}</FieldAlert>}
    </Fragment>
  );
}

export default memo(TextField);
