import { h } from 'preact';
import classnames from 'classnames';

import './index.scss';

function IconDotsVertical({ class: className, ...rest }) {
  const classes = classnames('icon-dots-vertical', className);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class={classes} {...rest}>
      <path
        class="icon-dots-vertical__path"
        fillRule="evenodd"
        d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      />
    </svg>
  );
}

export default IconDotsVertical;
