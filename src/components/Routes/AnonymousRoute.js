import { h } from 'preact';
import { Route } from 'react-router-dom';

import useSetup from 'hooks/useSetup';
import useUser from 'hooks/useUser';

function AnonymousRoute({ component, ...rest }) {
  const { user } = useUser();
  useSetup(() => {
    if (user) {
      // redirect to home page
    }
  });

  return <Route component={component} {...rest} />;
}

export default AnonymousRoute;
