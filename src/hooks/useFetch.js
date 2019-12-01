import { useCallback, useState } from 'preact/compat';

import { getStandardHeaders } from 'utils/headers';
import { refreshAccessToken } from 'utils/token';
import { setCookie } from 'utils/cookies';

function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const request = useCallback(
    async opts => {
      try {
        const response = await fetch(url, {
          headers: getStandardHeaders(),
          ...opts,
        });

        if (response.headers.get('x-access-token')) {
          setCookie('accessToken', response.headers.get('x-access-token'));
        }

        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else if (response.status === 401) {
          const json = await response.json();

          if (json.isBoom && json.output.payload.message === 'jwt expired') {
            await refreshAccessToken();
            request(opts);
          } else {
            setError(response.statusText);
          }
        } else {
          setError(response.statusText);
        }
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [url, setData, setError, setIsLoading],
  );

  return { request, data, error, isLoading };
}

export default useFetch;
