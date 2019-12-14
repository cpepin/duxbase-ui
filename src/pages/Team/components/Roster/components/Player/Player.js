import { h, Fragment } from 'preact';
import { useMemo, memo } from 'preact/compat';
import { useParams } from 'react-router-dom';
import classnames from 'classnames';

import useDelete from 'hooks/useDelete';
import useModal from 'hooks/useModal';

import { BoxListItem } from 'components/BoxList';
import Button from 'components/Button';
import IconDotsVertical from 'components/Icons/IconDotsVertical';
import Close from 'components/Icons/Close';
import Modal from 'components/Modal';

import { playerForTeam } from 'routes/teams';

import './index.scss';

const RemovePlayerConfirmationModalTitle = () => <Fragment>Are you sure?</Fragment>;

function Player({ id, onGetPlayers, player, selected, onSelectedPlayerClick }) {
  const removeConfirmationModalId = useMemo(() => `remove-confirmation-${player.id}`, [player]);
  const { id: teamId } = useParams();
  const { del: removePlayerFromTeam } = useDelete(playerForTeam(teamId, player.id));
  const { show, close } = useModal(removeConfirmationModalId);

  const fullName = useMemo(() => `${player.firstName} ${player.lastName}`, [
    player.firstName,
    player.lastName,
  ]);

  const handleClick = () => {
    onSelectedPlayerClick(player.id);
  };

  const handleRemoveClick = () => {
    onSelectedPlayerClick(player.id);
    show();
  };

  const handleConfirmation = async () => {
    await removePlayerFromTeam();
    onGetPlayers();
    close();
  };

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
        {selected ? <Close /> : <IconDotsVertical />}
      </Button>

      <div class="roster__player__modal" aria-hidden="true" aria-modal="true" id={id}>
        <div role="menu" class="roster__player__menu">
          <Button role="menuitem" small secondary onClick={handleClick}>
            Cancel
          </Button>
          <Button role="menuitem" small text onClick={handleRemoveClick}>
            Remove
          </Button>
        </div>
      </div>

      <Modal id={removeConfirmationModalId} title={RemovePlayerConfirmationModalTitle}>
        <p>
          Doing this will remove&nbsp;
          {player.firstName}
          &nbsp;
          {player.lastName}
          &nbsp;from your roster.
        </p>

        <div class="d-flex mt-7">
          <Button type="button" secondary class="ml-auto" onClick={close}>
            Cancel
          </Button>
          <Button type="submit" class="ml-3" onClick={handleConfirmation}>
            Confirm
          </Button>
        </div>
      </Modal>
    </BoxListItem>
  );
}

export default memo(Player);
