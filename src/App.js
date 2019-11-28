import { h } from 'preact';
import { BrowserRouter, HashRouter, Switch } from 'react-router-dom';

import UserProvider from 'components/UserProvider';
import AnonymousRoute from 'components/Routes/AnonymousRoute';
import SignedInRoute from 'components/Routes/SignedInRoute';

import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import Teams from 'pages/Teams';

import { isCordova } from 'utils/env';

const Router = isCordova() ? HashRouter : BrowserRouter;

function App() {
  return (
    <main>
      <Router>
        <UserProvider>
          <Switch>
            <AnonymousRoute component={SignIn} path="/" exact />
            <SignedInRoute component={Home} path="/home" />
            <SignedInRoute component={Teams} path="/teams" />
          </Switch>
        </UserProvider>
      </Router>
    </main>
  );
}

export default App;
