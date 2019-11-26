import { useState } from 'preact/compat';

import { getCookie } from 'utils/cookies';

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
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getCookie('jwt')}`,
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const json = await response.json();
        console.log(json);
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
