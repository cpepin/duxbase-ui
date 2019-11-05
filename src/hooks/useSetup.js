import { useState } from 'preact/compat';

function useSetup(setupFn) {
  useState(setupFn);
}

export default useSetup;
