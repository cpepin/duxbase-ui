import { h } from 'preact';
import { memo } from 'preact/compat';
import { Link } from 'react-router-dom';

import HomeIcon from 'components/Icons/Home';
import Team from 'components/Icons/Team';

import './index.scss';

function MainMenu() {
  return (
    <nav class="main-menu" aria-label="Main menu">
      <ul>
        <li>
          <Link to="/home">
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <Link to="/teams">
            <Team />
            Teams
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default memo(MainMenu);
