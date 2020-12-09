import './App.css';
import Login from './components/Login/Login-container';
import Signup from './components/Signup/Signup-container';
import Dashboard from './components/Dashboard/Dashboard-container';

import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route >
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
