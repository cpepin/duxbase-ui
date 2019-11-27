import { h } from 'preact';
import { memo } from 'preact/compat';

import Team from 'pages/Teams/components/Team';

import './index.scss';

const teams = [
  { name: 'The Squad', id: '1' },
  { name: 'Bloom Weddings', id: '2' },
  { name: 'Heberts Restaurant', id: '3' },
];

function TeamList() {
  return (
    <ul class="team-list">
      {teams.map(team => (
        <Team team={team} />
      ))}
    </ul>
  );
}

export default memo(TeamList);
