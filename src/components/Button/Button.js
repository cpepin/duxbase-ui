import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

import Spinner from 'components/Spinner';

function Button({
  secondary,
  fluid,
  class: className,
  children,
  loading,
  small,
  type = 'button',
  ...rest
}) {
  const classes = classnames(
    'button',
    {
      'button--secondary': secondary,
      'button--fluid': fluid,
      'button--small': small,
    },
    className,
  );

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} class={classes} {...rest}>
      {loading ? <Spinner class="button__spinner" /> : children}
    </button>
  );
}

export default memo(Button);
