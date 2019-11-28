import { h } from 'preact';
import { memo, useMemo } from 'preact/compat';
import { Link } from 'react-router-dom';

import TeamIcon from 'components/Icons/Team';
import ArrowRightCircleIcon from 'components/Icons/ArrowRightCircle';

import './index.scss';

function Team({ team }) {
  const teamUrl = useMemo(() => `/teams/${team.id}`, [team]);

  return (
    <li class="team-list__team">
      <Link to={teamUrl}>
        {/* <NotificationContainer class="team-list__item__icon"> */}
        <TeamIcon class="team-list__team__icon" />
        {/* </NotificationContainer> */}
        <div class="team-list__team__description">
          <div>
            <span class="team-list__team__description__title">{team.name}</span>
            {/* <span class="team-list__item__description__event team-list__item__description__event--urgent">
              Event tomorrow
            </span> */}
          </div>
          <ArrowRightCircleIcon class="team-list__team__description__arrow" />
        </div>
      </Link>
    </li>
  );
}

export default memo(Team);
