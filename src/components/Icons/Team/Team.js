import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function Team({ class: className, primaryFill, secondaryFill, ...rest }) {
  const classes = classnames('team-icon', className);

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class={classes}
      {...rest}
    >
      <path
        class="team-icon__primary"
        d="M12 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3zM7 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm10 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      />
      <path
        class="team-icon__secondary"
        d="M12 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-3 1h6a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a3 3 0 0 1 3-3z"
      />
      <span>Team Icon</span>
    </svg>
  );
}

export default memo(Team);
