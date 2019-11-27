import { h } from 'preact';
import { memo, useEffect } from 'preact/compat';

import { teams as teamsRoute } from 'routes/teams';

import useGet from 'hooks/useGet';

import Team from 'pages/Teams/components/Team';

import './index.scss';

function TeamList() {
  const { data: teams, get: getTeams } = useGet(teamsRoute());

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <ul class="team-list">{teams && teams.map(team => <Team key={team.id} team={team} />)}</ul>
  );
}

export default memo(TeamList);
