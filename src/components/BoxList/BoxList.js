import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function BoxList({ children, class: className, ...rest }) {
  const classes = classnames('box-list', className);

  return (
    <ul class={classes} {...rest}>
      {children}
    </ul>
  );
}

export default memo(BoxList);
