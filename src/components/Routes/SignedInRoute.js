import { h, Fragment } from 'preact';
import { Route } from 'react-router-dom';

import useSetup from 'hooks/useSetup';
import useUser from 'hooks/useUser';

import Spinner from 'components/Spinner';
import MainMenu from 'components/MainMenu';

function SignedInRoute({ component: Component, ...rest }) {
  const { user, fetchUser, isLoading, error } = useUser();

  useSetup(() => {
    if (!user) {
      fetchUser();
    }
  });

  const render = () => {
    if (!isLoading && !error) {
      return (
        <Fragment>
          <MainMenu />
          <main>
            <Component />
          </main>
        </Fragment>
      );
    }
    return <Spinner />;
  };

  return <Route render={render} {...rest} />;
}

export default SignedInRoute;
