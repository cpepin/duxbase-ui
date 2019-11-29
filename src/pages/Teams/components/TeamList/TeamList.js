import { h } from 'preact';
import { memo } from 'preact/compat';

import Team from 'pages/Teams/components/Team';

import './index.scss';

function TeamList({ teams }) {
  return (
    <ul class="team-list">{teams && teams.map(team => <Team key={team.id} team={team} />)}</ul>
  );
}

export default memo(TeamList);
