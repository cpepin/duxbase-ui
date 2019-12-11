import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function FieldContainer({ children, class: className, inline, ...rest }) {
  const classes = classnames('field-container', className, {
    'field-container--inline': inline,
  });

  return (
    <div class={classes} {...rest}>
      {children}
    </div>
  );
}

export default memo(FieldContainer);
