import { h } from 'preact';

import useSetup from 'hooks/useSetup';
import useUser from 'hooks/useUser';

import Spinner from 'components/Spinner';

function SignedInRoute({ component: Component, ...rest }) {
  const { user, fetchUser, isLoading, error } = useUser();

  useSetup(() => {
    if (!user) {
      fetchUser();
    }
  });

  return !isLoading && !error ? <Component {...rest} /> : <Spinner />;
}

export default SignedInRoute;
