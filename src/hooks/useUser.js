import { useContext } from 'preact/compat';

import UserContext from 'contexts/UserContext';

function useUser() {
  return useContext(UserContext);
}

export default useUser;
