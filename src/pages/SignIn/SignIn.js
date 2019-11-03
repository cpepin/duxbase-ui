import { h } from 'preact';
import { memo } from 'preact/compat';
import { useForm } from 'react-form';

import TextField from 'components/TextField';
import Text from 'components/Text';
import Container from 'components/Container';
import usePost from 'hooks/usePost';
import FieldContainer from 'components/FieldContainer';
import { isEmail, isRequired } from 'utils/validation';

function SignIn() {
  const { post: signIn } = usePost('http://localhost:3000/auth/login');

  const handleSubmit = values => {
    signIn(values);
  };

  const { Form } = useForm({ onSubmit: handleSubmit });

  return (
    <Container class="mt-10" size="sm">
      <Text elemType="h1" size={6}>
        Squad Leader
      </Text>

      <Text class="color-gray-7 mt-3" elemType="p">
        Manage your teams with ease.
      </Text>

      <Form class="mt-6 d-flex d-flex-column">
        <FieldContainer>
          <TextField label="Email" id="email" name="email" field="email" validate={isEmail} />
        </FieldContainer>

        <FieldContainer>
          <TextField
            label="Password"
            id="password"
            name="password"
            field="password"
            type="password"
            validate={isRequired}
          />
        </FieldContainer>

        <a href="google.com" class="ml-auto mt-4">
          Register
        </a>

        <button type="submit" class="mt-5">
          Login
        </button>
      </Form>
    </Container>
  );
}

export default memo(SignIn);
