import { useState } from 'preact/compat';

import { getStandardHeaders } from 'utils/headers';

function usePost(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const post = async body => {
    setError();
    setIsLoading(true);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: getStandardHeaders(),
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const json = await response.json();
        setData(json);
      } else {
        setError(response.statusText);
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    error,
    isLoading,
    post,
  };
}

export default usePost;
