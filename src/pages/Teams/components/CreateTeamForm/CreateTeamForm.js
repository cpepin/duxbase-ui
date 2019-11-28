import { h } from 'preact';
import { memo } from 'preact/compat';

import Button from 'components/Button';
import Form from 'components/Form';
import TextField from 'components/TextField';
import FieldContainer from 'components/FieldContainer';
import CheckboxField from 'components/CheckboxField';

import { isRequired } from 'utils/validation';

import usePost from 'hooks/usePost';

import { teams } from 'routes/teams';

function CreateTeamForm({ onCancelForm }) {
  const { post: createTeam, data } = usePost(teams());

  const handleSubmit = async values => {
    await createTeam(values);
    onCancelForm();
  };

  return (
    <Form class="mt-6" onSubmit={handleSubmit}>
      <FieldContainer>
        <TextField label="Team Name" id="name" name="name" field="name" validate={isRequired} />
      </FieldContainer>

      <FieldContainer>
        <CheckboxField
          checked
          label="I am a player-manager for this team."
          id="player"
          name="player"
          field="player"
        />
      </FieldContainer>

      <div class="d-flex mt-7">
        <Button type="button" secondary class="ml-auto" onClick={onCancelForm}>
          Cancel
        </Button>
        <Button type="submit" class="ml-3">
          Create
        </Button>
      </div>
    </Form>
  );
}

export default memo(CreateTeamForm);
