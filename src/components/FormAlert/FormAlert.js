import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function FormAlert({ children, class: className, ...rest }) {
  const classes = classnames('form-alert', className);

  return (
    <div role="alert" class={classes} {...rest}>
      {children}
    </div>
  );
}

export default memo(FormAlert);
