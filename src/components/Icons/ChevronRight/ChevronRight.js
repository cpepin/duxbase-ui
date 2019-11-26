import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function ChevronRight({ class: className, fill, ...rest }) {
  const classes = classnames('chevron-right-icon', className);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class={classes} {...rest}>
      <path
        // eslint-disable-next-line react/no-unknown-property
        fill-rule="evenodd"
        d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
      />
    </svg>
  );
}

export default memo(ChevronRight);
