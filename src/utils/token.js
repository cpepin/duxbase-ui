import { token } from 'routes/auth';

import { setCookie, getCookie } from 'utils/cookies';

const ACCESS_TOKEN_COOKIE = 'accessToken';
const REFRESH_TOKEN_COOKIE = 'refreshToken';

function setAccessToken(accessToken) {
  setCookie(ACCESS_TOKEN_COOKIE, accessToken);
}

function setRefreshToken(refreshToken) {
  setCookie(REFRESH_TOKEN_COOKIE, refreshToken);
}

function getAccessToken() {
  return getCookie(ACCESS_TOKEN_COOKIE);
}

function getRefreshToken() {
  return getCookie(REFRESH_TOKEN_COOKIE);
}

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

export { refreshAccessToken, setAccessToken, setRefreshToken, getAccessToken, getRefreshToken };
