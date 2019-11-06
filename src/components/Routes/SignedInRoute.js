import { h } from 'preact';

import useSetup from 'hooks/useSetup';
import useUser from 'hooks/useUser';

import Spinner from 'components/Spinner';

function SignedInRoute({ component: Component, ...rest }) {
  const { fetchUser, isLoading, error } = useUser();

  useSetup(() => {
    fetchUser();
  });

  return !isLoading && !error ? <Component {...rest} /> : <Spinner />;
}

export default SignedInRoute;
