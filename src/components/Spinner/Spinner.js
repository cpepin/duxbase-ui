import { h, Fragment } from 'preact';
import { memo } from 'preact/compat';

import './index.scss';

function Spinner({ label = 'Loading...' }) {
  return (
    <Fragment>
      <span class="spinner__label" role="status" aria-busy="true" aria-live="polite">
        {label}
      </span>
      <div class="spinner__icon" />
    </Fragment>
  );
}

export default memo(Spinner);
