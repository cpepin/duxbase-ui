import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function FieldAlert({ children, class: className, ...rest }) {
  const classes = classnames('field-alert', className);

  return (
    <div class={classes} aria-live="assertive" {...rest}>
      {children}
    </div>
  );
}

export default memo(FieldAlert);
