import { h } from 'preact';

import useSetup from 'hooks/useSetup';
import useUser from 'hooks/useUser';

function AnonymousRoute({ component: Component, ...rest }) {
  const { user } = useUser();
  useSetup(() => {
    if (user) {
      // redirect to home page
    }
  });

  return <Component {...rest} />;
}

export default AnonymousRoute;
