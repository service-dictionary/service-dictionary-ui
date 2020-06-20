import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SourcesPage from './components/sources/SourcesPage';
import ManageSourcePage from './components/sources/ManageSourcePage';
import MenuBar from './components/shared/MenuBar';

function App() {
  return (
    <Router>
      <header>
        <MenuBar />
      </header>
      <Container maxWidth="lg" component="main">
        <Switch>
          <Route path="/sources">
            <SourcesPage />
          </Route>
          <Route path="/source/:sourceid" component={ManageSourcePage} />
          <Route path="/source/" component={ManageSourcePage} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

function Home() {
  return <h2>Welcome</h2>;
}

export default App;
