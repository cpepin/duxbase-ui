import { h } from 'preact';
import { useMemo, memo, Fragment } from 'preact/compat';
import { useParams } from 'react-router-dom';

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
      </Card>
    </Fragment>
  );
}

export default memo(Roster);
