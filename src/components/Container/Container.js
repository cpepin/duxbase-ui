import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function Container({ children, class: className, size = 'md', ...rest }) {
  const classes = classnames(`container container--${size}`, className);

  return (
    <div {...rest} class={classes}>
      {children}
    </div>
  );
}

export default memo(Container);
