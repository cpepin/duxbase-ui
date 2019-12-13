import { useCallback } from 'preact/compat';

import useFetch from 'hooks/useFetch';

function useDelete(url) {
  const { request, data, error, isLoading } = useFetch(url);

  const del = useCallback(() => request({ method: 'DELETE' }), [request]);

  return {
    data,
    error,
    isLoading,
    del,
  };
}

export default useDelete;
