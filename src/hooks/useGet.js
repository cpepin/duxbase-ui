import useFetch from 'hooks/useFetch';

function useGet(url) {
  const { request: get, data, error, isLoading } = useFetch(url);

  return { get, data, error, isLoading };
}

export default useGet;
