function isDev() {
  const { hostname } = window.location;

  return hostname.indexOf('localhost') > -1 || hostname.indexOf('10.0.2.2') > -1;
}

function getApiRoute(path) {
  return isDev() ? `http://localhost:3000${path}` : `https://api.duxbase.com${path}`;
}

export { getApiRoute };
