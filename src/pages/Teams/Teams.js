import { h } from 'preact';
import { memo } from 'preact/compat';

import Container from 'components/Container';
import Breadcrumbs from 'components/Breadcrumbs';
import Card from 'components/Card';

import TeamList from './components/TeamList';

const teamsCrumbs = [{ label: 'Home', url: '/home' }, { label: 'Teams', url: '/teams' }];

function Teams() {
  return (
    <Container size="sm" class="mt-8">
      <h1 class="font-size-6">Teams</h1>

      <Breadcrumbs links={teamsCrumbs} class="mt-3" />

      <Card class="mt-5">
        <TeamList />
      </Card>
    </Container>
  );
}

export default memo(Teams);
