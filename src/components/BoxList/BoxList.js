import { h } from 'preact';
import { memo } from 'preact/compat';

import './index.scss';

function BoxList({ children }) {
  return <ul class="box-list">{children}</ul>;
}

export default memo(BoxList);
