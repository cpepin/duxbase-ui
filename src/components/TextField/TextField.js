import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import useField from 'hooks/useField';
import FieldAlert from '../FieldAlert';

function TextField({ class: className, id, label, name, validate, ...rest }) {
  const { error, fieldProps } = useField({ name, validate });

  const classes = classnames({ 'input--error': error }, className);
  const errorId = `${id}-error`;

  return (
    <Fragment>
      <label for={id}>{label}</label>
      <input {...rest} {...fieldProps} class={classes} />
      {error && <FieldAlert id={errorId}>{error}</FieldAlert>}
    </Fragment>
  );
}

export default memo(TextField);
