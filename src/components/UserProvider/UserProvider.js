import { h } from 'preact';
import { useCallback, useMemo, useEffect } from 'preact/compat';
import { useHistory } from 'react-router-dom';

import UserContext from 'contexts/UserContext';

import useGet from 'hooks/useGet';

import { me } from 'routes/auth';

function UserProvider({ children }) {
  const history = useHistory();
  const { get, data: user, isLoading, error } = useGet(me());

  const fetchUser = useCallback(() => {
    get();
  }, []);

  useEffect(() => {
    if (error) {
      history.push('/');
    }
  }, [error]);

  const value = useMemo(
    () => ({
      fetchUser,
      user,
      isLoading,
      error,
    }),
    [fetchUser, user, isLoading, error],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
