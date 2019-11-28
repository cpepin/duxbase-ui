import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import useField from 'hooks/useField';

import './index.scss';

function CheckboxField({ class: className, id, label, name, validate, ...rest }) {
  const { fieldProps } = useField({ name, validate, isCheckbox: true });
  const classes = classnames('checkbox-field', className);

  return (
    <div class={classes}>
      <input type="checkbox" id={id} {...rest} {...fieldProps} />
      <label for={id}>{label}</label>
    </div>
  );
}

export default memo(CheckboxField);
