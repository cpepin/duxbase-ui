import { h } from 'preact';
import { memo } from 'preact/compat';

import CheckboxField from 'components/CheckboxField';
import Container from 'components/Container';
import Button from 'components/Button';
import Breadcrumbs from 'components/Breadcrumbs';
import Card from 'components/Card';
import Modal from 'components/Modal';
import Form from 'components/Form';
import TextField from 'components/TextField';
import FieldContainer from 'components/FieldContainer';

import { isRequired } from 'utils/validation';

import TeamList from 'pages/Teams/components/TeamList';

const teamsCrumbs = [{ label: 'Home', url: '/home' }, { label: 'Teams', url: '/teams' }];

function Teams() {
  return (
    <Container size="sm" class="mt-8">
      <h1 class="font-size-6">Teams</h1>

      <Breadcrumbs links={teamsCrumbs} class="mt-3" />

      <Button class="mt-5 ml-auto" type="button" small secondary>
        Create team
      </Button>

      <Modal>
        <h2 class="font-size-5 mt-3">Create team</h2>

        <Form class="mt-5">
          <FieldContainer>
            <TextField label="Name" id="name" name="name" field="name" validate={isRequired} />
          </FieldContainer>

          <FieldContainer>
            <CheckboxField />
          </FieldContainer>
        </Form>
      </Modal>

      <Card class="mt-3">
        <TeamList />
      </Card>
    </Container>
  );
}

export default memo(Teams);
