import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function FieldContainer({ children, class: className, ...rest }) {
  const classes = classnames('field-container', className);

  return (
    <div class={classes} {...rest}>
      {children}
    </div>
  );
}

export default memo(FieldContainer);
