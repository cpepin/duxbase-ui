import { useEffect, useRef } from 'preact/compat';
import * as Comlink from 'comlink';

function useWorker(worker) {
  const comlinkInstance = useRef();

  useEffect(() => {
    comlinkInstance.current = Comlink.wrap(worker);

    return () => {
      worker.terminate();
    };
  }, []);

  return comlinkInstance.current;
}

export default useWorker;
