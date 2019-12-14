import { h } from 'preact';
import { useMemo, memo, Fragment, useEffect, useState, useCallback } from 'preact/compat';
import { useParams } from 'react-router-dom';
import Micromodal from 'micromodal';

import BoxList from 'components/BoxList';
import Card from 'components/Card';
import Breadcrumbs from 'components/Breadcrumbs';

import useGet from 'hooks/useGet';

import { playersForTeam } from 'routes/teams';

import Player from './components/Player';
import AddPlayer from './components/AddPlayer';
import './index.scss';

const getPlayerModalId = id => `roster-player-modal-${id}`;

function Roster() {
  const [selectedPlayerId, setSelectedPlayerId] = useState();
  const { id } = useParams();
  const { data: players, get: getPlayers } = useGet(playersForTeam(id));

  const teamsCrumbs = useMemo(
    () => [
      { label: 'Team Home', url: `/teams/${id}` },
      { label: 'Roster', url: `/teams/${id}/roster` },
    ],
    [id],
  );

  const handleSubmit = useCallback(() => {
    getPlayers();
  }, [getPlayers]);

  const handleSelectedPlayerClick = useCallback(
    newId => {
      setSelectedPlayerId(currId => {
        if (currId) {
          Micromodal.close(getPlayerModalId(currId));
        }

        if (newId === currId) {
          // clear selected state
          return undefined;
        }

        Micromodal.show(getPlayerModalId(newId));
        return newId;
      });
    },
    [setSelectedPlayerId],
  );

  useEffect(() => {
    getPlayers();
  }, [getPlayers]);

  return (
    <Fragment>
      <Breadcrumbs links={teamsCrumbs} />

      <Card fluid padded class="mt-4">
        <h2 class="font-size-5">Roster</h2>

        <AddPlayer onSubmit={handleSubmit} />

        <BoxList class="roster mt-4">
          {players &&
            players.map(player => (
              <Player
                id={getPlayerModalId(player.id)}
                key={player.id}
                player={player}
                selected={player.id === selectedPlayerId}
                onGetPlayers={getPlayers}
                onSelectedPlayerClick={handleSelectedPlayerClick}
              />
            ))}
        </BoxList>
      </Card>
    </Fragment>
  );
}

export default memo(Roster);
