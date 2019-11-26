import { h } from 'preact';
import { memo } from 'preact/compat';
import { Link } from '@reach/router';

import kebabCase from 'utils/kebabCase';
import ChevronRight from 'components/Icons/ChevronRight';

import './index.scss';

function Breadcrumbs({ links, ...rest }) {
  return (
    <nav aria-label="Breadcrumbs" {...rest}>
      <ol class="breadcrumbs">
        {links.map((link, idx) => (
          <li key={kebabCase(link.label)} class="breadcrumbs__crumb">
            <Link to={link.url} aria-current={idx === links.length - 1 ? 'page' : undefined}>
              {link.label}
            </Link>

            {idx !== links.length - 1 && <ChevronRight class="breadcrumbs__chevron" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default memo(Breadcrumbs);
