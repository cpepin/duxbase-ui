import { getApiRoute } from 'utils/env';

export const teams = () => getApiRoute('/teams');
export const teamById = id => getApiRoute(`/teams/${id}`);
export const playersForTeam = teamId => getApiRoute(`/teams/${teamId}/players`);
export const playerForTeam = (teamId, playerId) =>
  getApiRoute(`/teams/${teamId}/players/${playerId}`);
