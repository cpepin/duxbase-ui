import { getAccessToken, getRefreshToken } from 'utils/token';

function getStandardHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAccessToken()}`,
    'x-refresh-token': getRefreshToken(),
  };
}

export { getStandardHeaders };
