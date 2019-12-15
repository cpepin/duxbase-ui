import { h } from 'preact';
import { memo } from 'preact/compat';

import Container from 'components/Container';

function Home() {
  return (
    <Container size="sm" class="mt-5">
      Home page
    </Container>
  );
}

export default memo(Home);
