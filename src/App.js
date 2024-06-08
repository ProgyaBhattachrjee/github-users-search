import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
     <Switch>
     <Route path='/dashboard' exact={true}>
      <Dashboard></Dashboard>
      </Route>
    <Route path='/'>  <Login /></Route>
     <Route path='*'> <Error /></Route>
     </Switch>
    </Router>
  );
}

export default App;
