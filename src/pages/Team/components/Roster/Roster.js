import { h } from 'preact';
import { useMemo, memo, Fragment } from 'preact/compat';
import { useParams } from 'react-router-dom';

import BoxList, { BoxListItem } from 'components/BoxList';
import Card from 'components/Card';
import Breadcrumbs from 'components/Breadcrumbs';

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

        <BoxList class="mt-4">
          <BoxListItem>Cam Pepin</BoxListItem>
          <BoxListItem>Drew Pepin</BoxListItem>
          <BoxListItem>Matt Keene</BoxListItem>
          <BoxListItem>Cody Stevens</BoxListItem>
          <BoxListItem>Alex Turgeon</BoxListItem>
          <BoxListItem>Logan Lachapelle</BoxListItem>
          <BoxListItem>Sean Olsten</BoxListItem>
          <BoxListItem>Kory Furullo</BoxListItem>
          <BoxListItem>Branden Smith</BoxListItem>
        </BoxList>
      </Card>
    </Fragment>
  );
}

export default memo(Roster);
