import { h } from 'preact';
import { Route } from 'react-router-dom';

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

  return <Route render={() => (!isLoading && !error ? <Component /> : <Spinner />)} {...rest} />;
}

export default SignedInRoute;
