import { h } from 'preact';
import { memo } from 'preact/compat';

import { isRequired, isEmail } from 'utils/validation';

import usePost from 'hooks/usePost';

import { playersForTeam } from 'routes/teams';

import Form from 'components/Form';
import FieldContainer from 'components/FieldContainer';
import TextField from 'components/TextField';
import Button from 'components/Button';

function CreatePlayerForm({ teamId, onCancel, onSubmit }) {
  const { post: createPlayer } = usePost(playersForTeam(teamId));

  const handleSubmit = async player => {
    await createPlayer(player);
    onSubmit();
  };

  return (
    <Form class="mt-6" onSubmit={handleSubmit}>
      <FieldContainer>
        <TextField
          label="First Name"
          id="firstName"
          name="firstName"
          field="firstName"
          validate={isRequired}
        />
      </FieldContainer>

      <FieldContainer>
        <TextField
          label="Last Name"
          id="lastName"
          name="lastName"
          field="lastName"
          validate={isRequired}
        />
      </FieldContainer>

      <FieldContainer>
        <TextField label="Email Address" id="email" name="email" field="email" validate={isEmail} />
      </FieldContainer>

      <div class="d-flex mt-7">
        <Button type="button" secondary class="ml-auto" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" class="ml-3">
          Create
        </Button>
      </div>
    </Form>
  );
}

export default memo(CreatePlayerForm);
