import { h } from 'preact';
import { memo, useMemo, Fragment } from 'preact/compat';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './index.scss';

function BoxListItem({ children, class: className, link, ...rest }) {
  const classes = classnames('box-list__item', className, {
    'box-list__item--link': link,
  });

  const ContentElement = useMemo(() => (link ? Link : Fragment), [link]);

  return (
    <li class={classes}>
      <ContentElement {...rest}>{children}</ContentElement>
    </li>
  );
}

export default memo(BoxListItem);
