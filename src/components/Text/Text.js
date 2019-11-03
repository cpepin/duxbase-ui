import { h } from 'preact';
import { memo } from 'preact/compat';
import classnames from 'classnames';

function Text({ elemType: Element, children, class: className, size = 3, ...rest }) {
  const classes = classnames(className, `font-size-${size}`);

  return (
    <Element class={classes} {...rest}>
      {children}
    </Element>
  );
}

export default memo(Text);
