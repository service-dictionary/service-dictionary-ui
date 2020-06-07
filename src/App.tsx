import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SourcesPage from './components/sources/SourcesPage';
import ManageSourcePage from './components/sources/ManageSourcePage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sources">Sources</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/sources">
            <SourcesPage />
          </Route>
          <Route path="/source/:id" component={ManageSourcePage} />
          />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
