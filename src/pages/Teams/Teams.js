import { h } from 'preact';
import { memo, Fragment, useEffect } from 'preact/compat';

import Container from 'components/Container';
import Button from 'components/Button';
import Breadcrumbs from 'components/Breadcrumbs';
import Card from 'components/Card';
import Modal from 'components/Modal';

import TeamList from 'pages/Teams/components/TeamList';
import CreateTeamForm from 'pages/Teams/components/CreateTeamForm';

import useModal from 'hooks/useModal';
import useGet from 'hooks/useGet';

import { teams as teamsRoute } from 'routes/teams';

const teamsCrumbs = [{ label: 'Home', url: '/home' }, { label: 'Teams', url: '/teams' }];
const CreateModalTitle = memo(() => <Fragment>Create Team</Fragment>);
const createTeamModalId = 'create-team-modal';

function Teams() {
  const { show, close: handleClose } = useModal(createTeamModalId);
  const { data: teams, get: getTeams } = useGet(teamsRoute());

  useEffect(() => {
    getTeams();
  }, []);

  const handleSubmit = () => {
    handleClose();
    getTeams();
  };

  return (
    <Container size="sm" class="mt-5">
      <h1 class="font-size-6">Teams</h1>

      <Breadcrumbs links={teamsCrumbs} />

      {/* Thanks safari */}
      <div>
        <Button class="mt-5 ml-auto" type="button" small secondary onClick={show}>
          Create team
        </Button>
      </div>

      <Modal id={createTeamModalId} title={CreateModalTitle}>
        <p>Create a new team to manage players and events.</p>

        <CreateTeamForm onCancel={handleClose} onSubmit={handleSubmit} />
      </Modal>

      <Card class="mt-3">
        <TeamList teams={teams} />
      </Card>
    </Container>
  );
}

export default memo(Teams);
