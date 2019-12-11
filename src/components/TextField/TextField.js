import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import useField from 'hooks/useField';
import FieldAlert from '../FieldAlert';

function TextField({ class: className, id, label, name, validate, ...rest }) {
  const { error, fieldProps } = useField({ name, validate });

  const classes = classnames({ 'input--error': error }, className);
  const errorId = `${id}-error`;

  return (
    <div>
      <label for={id}>{label}</label>
      <input
        class={classes}
        id={id}
        aria-describedby={error ? errorId : undefined}
        type="text"
        {...rest}
        {...fieldProps}
      />
      {error && <FieldAlert id={errorId}>{error}</FieldAlert>}
    </div>
  );
}

export default memo(TextField);
