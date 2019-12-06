import { h } from 'preact';
import { useEffect } from 'preact/compat';
import { useParams } from 'react-router-dom';

import Container from 'components/Container';

import useGet from 'hooks/useGet';

import { teamById } from 'routes/teams';

function Team() {
  const { id } = useParams();
  const { get: getTeam, data: team, isLoading, error } = useGet(teamById(id));

  useEffect(() => {
    getTeam();
  }, []);

  return (
    <Container size="sm" class="mt-8">
      {!isLoading && team && <h1 class="font-size-6">{team.name}</h1>}
    </Container>
  );
}

export default Team;
