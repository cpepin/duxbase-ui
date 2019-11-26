import { h } from 'preact';
import { memo } from 'preact/compat';

import classnames from 'classnames';

import './index.scss';

function NotificationContainer({ children, class: className, ...rest }) {
  const classes = classnames('notification-container', className);

  return (
    <div class={classes} aria-label="Has noticiations" {...rest}>
      {children}
    </div>
  );
}

export default memo(NotificationContainer);
