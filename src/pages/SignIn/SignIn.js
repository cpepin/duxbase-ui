import { h } from 'preact';
import { memo, useEffect } from 'preact/compat';
import { useHistory } from 'react-router-dom';

import Button from 'components/Button';
import Form from 'components/Form';
import TextField from 'components/TextField';
import Container from 'components/Container';
import FieldContainer from 'components/FieldContainer';

import usePost from 'hooks/usePost';

import { isEmail, isRequired } from 'utils/validation';
import { setAccessToken, setRefreshToken } from 'utils/token';

import { login } from 'routes/auth';

function SignIn() {
  const history = useHistory();
  const { post: signIn, data } = usePost(login());

  const handleSubmit = ({ email, password }) => {
    signIn({ email: email.toLowerCase(), password });
  };

  useEffect(() => {
    if (data) {
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      history.push('/home');
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

        <Button type="submit" class="mt-5" fluid>
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default memo(SignIn);
