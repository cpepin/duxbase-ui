import { h } from 'preact';
import { useMemo, memo, Fragment } from 'preact/compat';
import { useParams } from 'react-router-dom';

import Button from 'components/Button';
import BoxList from 'components/BoxList';
import Card from 'components/Card';
import Breadcrumbs from 'components/Breadcrumbs';

import Player from '../Player';
import './index.scss';

const players = [
  { firstName: 'Cameron', lastName: 'Pepin', emailAddress: 'pepin.cameron@gmail.com' },
  { firstName: 'Drew', lastName: 'Pepin', emailAddress: 'drewpepin1995@gmail.com' },
];

function Roster() {
  const { id } = useParams();

  const teamsCrumbs = useMemo(
    () => [
      { label: 'Team Home', url: `/teams/${id}` },
      { label: 'Roster', url: `/teams/${id}/roster` },
    ],
    [id],
  );

  return (
    <Fragment>
      <Breadcrumbs links={teamsCrumbs} />

      <Card fluid padded class="mt-4">
        <h2 class="font-size-5">Roster</h2>

        {/* Thanks safari */}
        <div>
          <Button class="ml-auto" type="button" small secondary>
            Add player
          </Button>
        </div>

        <BoxList class="roster mt-4">
          {players.map(player => (
            <Player player={player} />
          ))}
        </BoxList>
      </Card>
    </Fragment>
  );
}

export default memo(Roster);
