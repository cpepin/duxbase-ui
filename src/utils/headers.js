import { getCookie } from 'utils/cookies';

function getStandardHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getCookie('accessToken')}`,
    'x-refresh-token': getCookie('refreshToken'),
  };
}

export { getStandardHeaders };
