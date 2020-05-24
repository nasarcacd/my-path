import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact to="/" component={HomePage} />
      </Switch>
    </Router>      
  );
}

export default App;
