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

  return (
    <main>
      <Route component={component} {...rest} />
    </main>
  );
}

export default AnonymousRoute;
