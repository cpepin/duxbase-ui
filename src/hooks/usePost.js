import { useCallback } from 'preact/compat';

import useFetch from 'hooks/useFetch';

function usePost(url) {
  const { request, data, error, isLoading } = useFetch(url);

  const post = useCallback(body => request({ body: JSON.stringify(body), method: 'POST' }), [
    request,
  ]);

  return {
    data,
    error,
    isLoading,
    post,
  };
}

export default usePost;
