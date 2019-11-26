import { h } from 'preact';
import { memo } from 'preact/compat';
import { Link } from '@reach/router';

import TeamIcon from 'components/Icons/Team';
import ArrowRightCircleIcon from 'components/Icons/ArrowRightCircle';
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
          <div class="team-list__item__description">
            <div>
              <span class="team-list__item__description__title">The Squad</span>
              <span class="team-list__item__description__event team-list__item__description__event--urgent">
                Event tomorrow
              </span>
            </div>
            <ArrowRightCircleIcon class="team-list__item__description__arrow" />
          </div>
        </Link>
      </li>
      <li class="team-list__item">
        <Link to="/home">
          <TeamIcon class="team-list__item__icon" />
          <div class="team-list__item__description">
            <div>
              <span class="team-list__item__description__title">Bloom Weddings</span>
              <span class="team-list__item__description__event">Event next week</span>
            </div>
            <ArrowRightCircleIcon class="team-list__item__description__arrow" />
          </div>
        </Link>
      </li>
      <li class="team-list__item">
        <Link to="/home">
          <TeamIcon class="team-list__item__icon" />
          <div class="team-list__item__description">
            <div>
              <span class="team-list__item__description__title">Heberts Restaurant</span>
              <span class="team-list__item__description__event">No events scheduled</span>
            </div>
            <ArrowRightCircleIcon class="team-list__item__description__arrow" />
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default memo(TeamList);
