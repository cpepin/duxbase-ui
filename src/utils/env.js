function isDev() {
  // eslint-disable-next-line no-restricted-globals
  const { hostname } = self ? self.location : window.location;

  return hostname.indexOf('localhost') > -1 || hostname.indexOf('10.0.2.2') > -1;
}

function getApiRoute(path) {
  return isDev() ? `http://localhost:3000${path}` : `https://api.duxbase.com${path}`;
}

function getSocketSource() {
  return isDev() ? 'http://localhost:3000' : 'https://api.duxbase.com';
}

function isCordova() {
  return !!window.cordova;
}

export { getApiRoute, isCordova, getSocketSource };
