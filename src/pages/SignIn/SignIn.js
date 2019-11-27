import { h } from 'preact';
import { memo, useEffect } from 'preact/compat';
import { navigate } from '@reach/router';

import Form from 'components/Form';
import TextField from 'components/TextField';
import Container from 'components/Container';
import FieldContainer from 'components/FieldContainer';

import usePost from 'hooks/usePost';

import { isEmail, isRequired } from 'utils/validation';
import { setCookie } from 'utils/cookies';

import { login } from 'routes/auth';

function SignIn() {
  const { post: signIn, data } = usePost(login());

  const handleSubmit = values => {
    signIn(values);
  };

  useEffect(() => {
    if (data) {
      setCookie('jwt', data.jwt);
      navigate('/home');
    }
  }, [data]);

  return (
    <Container class="mt-10" size="sm">
      <h1 class="font-size-6">Duxbase</h1>

      <p class="color-gray-7 mt-3">Manage your teams with ease.</p>

      <Form class="mt-6 d-flex d-flex-column" onSubmit={handleSubmit}>
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

        <button type="submit" class="mt-5 button--fluid">
          Login
        </button>
      </Form>
    </Container>
  );
}

export default memo(SignIn);
