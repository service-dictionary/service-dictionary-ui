import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SourcesPage from './components/sources/SourcesPage';
import ManageSourcePage from './components/sources/ManageSourcePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/shared/MenuBar';

function App() {
  return (
    <Router>
      <div>
        <MenuBar />
        <Switch>
          <Route path="/sources">
            <SourcesPage />
          </Route>
          <Route path="/source/:sourceid" component={ManageSourcePage} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Welcome</h2>;
}

export default App;
