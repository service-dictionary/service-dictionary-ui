import React from 'react';
import { createStore, Reducer } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SourcesPage from './components/sources/SourcesPage';
import ManageSourcePage from './components/sources/ManageSourcePage';
import MenuBar from './components/shared/MenuBar';
import reducer, { StateT, ActionT } from './reducer';

const store = createStore(reducer as Reducer<StateT, ActionT>);

function App() {
  return (
    <ReduxProvider store={store}>
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
    </ReduxProvider>
  );
}

function Home() {
  return <h2>Welcome</h2>;
}

export default App;
