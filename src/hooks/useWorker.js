import { useEffect, useRef } from 'preact/compat';
import * as Comlink from 'comlink';

import useSetup from 'hooks/useSetup';

function useWorker(worker) {
  const comlinkInstance = useRef();

  useSetup(() => {
    comlinkInstance.current = Comlink.wrap(worker);
  });

  useEffect(() => {
    return () => {
      worker.terminate();
    };
  }, []);

  return comlinkInstance.current;
}

export default useWorker;
