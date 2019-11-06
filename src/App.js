import { h } from 'preact';
import { Router } from '@reach/router';

import UserProvider from 'components/UserProvider';
import AnonymousRoute from 'components/Routes/AnonymousRoute';
import SignedInRoute from 'components/Routes/SignedInRoute';

import Home from 'pages/Home';
import SignIn from 'pages/SignIn';

function App() {
  return (
    <UserProvider>
      <main>
        <Router>
          <AnonymousRoute component={SignIn} path="/" />
          <SignedInRoute component={Home} path="/home" />
        </Router>
      </main>
    </UserProvider>
  );
}

export default App;
