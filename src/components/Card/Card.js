import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function Card({ children, class: classNames, fluid, padded, ...rest }) {
  const classes = classnames('card', classNames, {
    'card--fluid': fluid,
    'card--padded': padded,
  });

  return (
    <div class={classes} {...rest}>
      {children}
    </div>
  );
}

export default memo(Card);
