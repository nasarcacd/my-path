import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import GoalDetailPage from './pages/goalDetail/GoalDetail.component';
import ContactPage from './pages/contact/contactPage.component';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import MyPathContext from './containers/my-path.container';

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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/goals'>
            <GoalDetailPage />
          </Route>
          <Route exact path='/'>
            <MyPathContext.Provider>
              <HomePage />
            </MyPathContext.Provider>
          </Route>
          <Route path='/contact'>
            <ContactPage />
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}


export default App;
