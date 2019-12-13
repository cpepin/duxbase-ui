import { h } from 'preact';
import { useMemo, useCallback, memo } from 'preact/compat';
import classnames from 'classnames';

import { BoxListItem } from 'components/BoxList';
import Button from 'components/Button';
import IconDotsVertical from 'components/Icons/IconDotsVertical';

import './index.scss';

function Player({ player, selected, onSelectedPlayerClick }) {
  const fullName = useMemo(() => `${player.firstName} ${player.lastName}`, [
    player.firstName,
    player.lastName,
  ]);

  const handleClick = useCallback(() => {
    onSelectedPlayerClick(player.id);
  }, [player.id]);

  const classes = useMemo(
    () => classnames('roster__player', { 'roster__player--selected': selected }),
    [selected],
  );

  return (
    <BoxListItem class={classes}>
      <div class="roster__player__description">
        <span class="roster__player__description__name">{fullName}</span>
        <span class="roster__player__description__email">{player.emailAddress}</span>
      </div>

      <Button
        class="roster__player__more-options"
        aria-label={`Open options for ${fullName}`}
        aria-haspopup="true"
        aria-expanded={selected}
        onClick={handleClick}
      >
        <IconDotsVertical />
      </Button>

      {selected && (
        <div role="menu" class="roster__player__menu">
          <Button role="menuitem" small>
            Edit
          </Button>
          <Button role="menuitem" small secondary>
            Cancel
          </Button>
          <Button role="menuitem" small text>
            Delete
          </Button>
        </div>
      )}
    </BoxListItem>
  );
}

export default memo(Player);
