import { h } from 'preact';
import { useCallback, useMemo, useEffect } from 'preact/compat';
import { navigate } from '@reach/router';

import UserContext from 'contexts/UserContext';

import useGet from 'hooks/useGet';

import { me } from 'routes/auth';

function UserProvider({ children }) {
  const { get, data: user, isLoading, error } = useGet(me());

  const fetchUser = useCallback(() => {
    get();
  }, []);

  useEffect(() => {
    if (error) {
      navigate('/');
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
