import { h } from 'preact';
import { memo, Fragment } from 'preact/compat';

import Container from 'components/Container';
import Button from 'components/Button';
import Breadcrumbs from 'components/Breadcrumbs';
import Card from 'components/Card';
import Modal from 'components/Modal';

import TeamList from 'pages/Teams/components/TeamList';
import CreateTeamForm from 'pages/Teams/components/CreateTeamForm';

import useModal from 'hooks/useModal';

const teamsCrumbs = [{ label: 'Home', url: '/home' }, { label: 'Teams', url: '/teams' }];
const CreateModalTitle = memo(() => <Fragment>Create Team</Fragment>);
const createTeamModalId = 'create-team-modal';

function Teams() {
  const { show, close } = useModal(createTeamModalId);

  return (
    <Container size="sm" class="mt-8">
      <h1 class="font-size-6">Teams</h1>

      <Breadcrumbs links={teamsCrumbs} class="mt-3" />

      <Button class="mt-5 ml-auto" type="button" small secondary onClick={show}>
        Create team
      </Button>

      <Modal id={createTeamModalId} title={CreateModalTitle}>
        <p>Create a new team to manage players and events.</p>

        <CreateTeamForm onCancelForm={close} />
      </Modal>

      <Card class="mt-3">
        <TeamList />
      </Card>
    </Container>
  );
}

export default memo(Teams);
