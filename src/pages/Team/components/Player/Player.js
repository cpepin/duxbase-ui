import { h } from 'preact';

import { BoxListItem } from 'components/BoxList';
import IconDotsVertical from 'components/Icons/IconDotsVertical';

import './index.scss';

function Player({ player }) {
  return (
    <BoxListItem class="roster__player">
      <div class="roster__player__description">
        <span class="roster__player__description__name">
          {player.firstName}
          {player.lastName}
        </span>
        <span class="roster__player__description__email">{player.emailAddress}</span>
      </div>
      <IconDotsVertical class="roster__player__more-options" />
    </BoxListItem>
  );
}

export default Player;
