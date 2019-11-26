import { h } from 'preact';
import { memo } from 'preact/compat';
import { Link } from '@reach/router';

import TeamIcon from 'components/Icons/Team';
import NotificationContainer from 'components/NotificationContainer';

import './index.scss';

function TeamList() {
  return (
    <ul class="team-list">
      <li class="team-list__item">
        <Link to="/home">
          <NotificationContainer class="team-list__item__icon">
            <TeamIcon />
          </NotificationContainer>
          <div>
            <span class="team-list__item__title">The Squad</span>
            <span class="team-list__item__event team-list__item__event--urgent">
              Event tomorrow
            </span>
          </div>
        </Link>
      </li>
      <li class="team-list__item">
        <Link to="/home">
          <TeamIcon class="team-list__item__icon" />
          <div>
            <span class="team-list__item__title">Bloom Weddings</span>
            <span class="team-list__item__event">Event next week</span>
          </div>
        </Link>
      </li>
      <li class="team-list__item">
        <Link to="/home">
          <TeamIcon class="team-list__item__icon" />
          <div>
            <span class="team-list__item__title">Heberts Restaurant</span>
            <span class="team-list__item__event">No events scheduled</span>
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default memo(TeamList);
