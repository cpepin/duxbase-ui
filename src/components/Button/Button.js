import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

function Button({ secondary, fluid, class: className, children, small, type = 'button', ...rest }) {
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
      {children}
    </button>
  );
}

export default memo(Button);
