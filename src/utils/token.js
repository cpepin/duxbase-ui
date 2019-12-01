import { token } from 'routes/auth';

import { setCookie, getCookie } from 'utils/cookies';

async function refreshAccessToken() {
  const response = await fetch(token(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken: getCookie('refreshToken') }),
  });

  if (response.ok) {
    const { accessToken } = await response.json();
    setCookie('accessToken', accessToken);
  } else {
    throw new Error('Issue refreshing token');
  }
}

export { refreshAccessToken };
