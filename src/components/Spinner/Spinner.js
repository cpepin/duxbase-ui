import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import './index.scss';

function Spinner({ label = 'Loading...', class: className, ...rest }) {
  const classes = classnames('spinner__icon', className);

  return (
    <Fragment>
      <span class="spinner__label" role="status" aria-busy="true" aria-live="polite">
        {label}
      </span>
      <div class={classes} {...rest} />
    </Fragment>
  );
}

export default memo(Spinner);
