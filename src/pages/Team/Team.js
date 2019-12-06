import { h } from 'preact';
import { useEffect } from 'preact/compat';
import { Route, useParams, useRouteMatch } from 'react-router-dom';

import Container from 'components/Container';

import useGet from 'hooks/useGet';

import { teamById } from 'routes/teams';

import Roster from './components/Roster';

function Team() {
  const { id } = useParams();
  const { path } = useRouteMatch();
  const { get: getTeam, data: team, isLoading } = useGet(teamById(id));

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <Container size="sm" class="mt-8">
      {!isLoading && team && <h1 class="font-size-6">{team.name}</h1>}
      <Route path={`${path}/roster`} component={Roster} />
    </Container>
  );
}

export default Team;
