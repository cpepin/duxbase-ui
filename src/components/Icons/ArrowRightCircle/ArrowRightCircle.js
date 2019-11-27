import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function ArrowRightCircle({ class: className, ...rest }) {
  const classes = classnames('arrow-right-circle', className);

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class={classes}
      {...rest}
    >
      <circle cx="12" cy="12" r="10" class="arrow-right-circle__primary" />
      <path
        class="arrow-right-circle__secondary"
        d="M12 14H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h5V8a1 1 0 0 1 1.7-.7l4 4a1 1 0 0 1 0 1.4l-4 4A1 1 0 0 1 12 16v-2z"
      />
    </svg>
  );
}

export default memo(ArrowRightCircle);
