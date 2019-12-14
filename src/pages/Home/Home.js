import { h } from 'preact';
import { memo } from 'preact/compat';
import { Link } from 'react-router-dom';

import Container from 'components/Container';

function Home() {
  return (
    <Container size="sm" class="mt-8">
      <Link to="/teams">Teams</Link>
    </Container>
  );
}

export default memo(Home);
