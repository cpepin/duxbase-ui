import { h } from 'preact';
import { useMemo, memo, Fragment, useEffect } from 'preact/compat';
import { useParams } from 'react-router-dom';

import Button from 'components/Button';
import BoxList from 'components/BoxList';
import Card from 'components/Card';
import Breadcrumbs from 'components/Breadcrumbs';
import Modal from 'components/Modal';

import useModal from 'hooks/useModal';
import useGet from 'hooks/useGet';

import { playersForTeam } from 'routes/teams';

import Player from './components/Player';
import CreatePlayerForm from './components/CreatePlayerForm';
import './index.scss';

const createPlayerModalId = 'create-player-modal';
const CreateModalTitle = memo(() => <Fragment>Create Player</Fragment>);

function Roster() {
  const { show, close: handleClose } = useModal(createPlayerModalId);
  const { id } = useParams();
  const { data: players, get: getPlayers } = useGet(playersForTeam(id));

  const teamsCrumbs = useMemo(
    () => [
      { label: 'Team Home', url: `/teams/${id}` },
      { label: 'Roster', url: `/teams/${id}/roster` },
    ],
    [id],
  );

  const handleSubmit = () => {
    getPlayers();
    handleClose();
  };

  useEffect(() => {
    getPlayers();
  }, [getPlayers]);

  return (
    <Fragment>
      <Breadcrumbs links={teamsCrumbs} />

      <Card fluid padded class="mt-4">
        <h2 class="font-size-5">Roster</h2>

        {/* Thanks safari */}
        <div>
          <Button class="ml-auto" type="button" small secondary onClick={show}>
            Add player
          </Button>
        </div>

        <BoxList class="roster mt-4">
          {players && players.map(player => <Player player={player} />)}
        </BoxList>
      </Card>

      <Modal id={createPlayerModalId} title={CreateModalTitle}>
        <p>Add a player to your team.</p>

        <p>
          If this email has already registed with duxbase, this player will be able to link their
          account.
        </p>

        <CreatePlayerForm teamId={id} onCancel={handleClose} onSubmit={handleSubmit} />
      </Modal>
    </Fragment>
  );
}

export default memo(Roster);
