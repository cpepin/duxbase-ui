import { h } from 'preact';
import { BrowserRouter, HashRouter, Switch } from 'react-router-dom';

import UserProvider from 'components/UserProvider';
import AnonymousRoute from 'components/Routes/AnonymousRoute';
import SignedInRoute from 'components/Routes/SignedInRoute';

import { isCordova } from 'utils/env';

import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import Teams from 'pages/Teams';
import Team from './pages/Team';

const Router = isCordova() ? HashRouter : BrowserRouter;

function App() {
  return (
    <main>
      <Router>
        <UserProvider>
          <Switch>
            <AnonymousRoute component={SignIn} path="/" exact />
            <SignedInRoute component={Home} path="/home" />
            <SignedInRoute component={Teams} path="/teams" exact />
            <SignedInRoute component={Team} path="/teams/:id" />
          </Switch>
        </UserProvider>
      </Router>
    </main>
  );
}

export default App;
