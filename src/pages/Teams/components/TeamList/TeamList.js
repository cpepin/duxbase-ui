import { h } from 'preact';
import { memo } from 'preact/compat';

import BoxList from 'components/BoxList';

import Team from '../Team';
import './index.scss';

function TeamList({ teams }) {
  return <BoxList>{teams && teams.map(team => <Team key={team.id} team={team} />)}</BoxList>;
}

export default memo(TeamList);
