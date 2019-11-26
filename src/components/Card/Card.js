import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function Card({ children, class: classNames, ...rest }) {
  const classes = classnames('card', classNames);

  return (
    <div class={classes} {...rest}>
      {children}
    </div>
  );
}

export default memo(Card);
