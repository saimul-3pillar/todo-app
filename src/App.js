import './App.css';
import Login from './components/Login/Login-container';
import Signup from './components/Signup/Signup-container';
import Dashboard from './components/Dashboard/Dashboard-container';

import { HashRouter,  Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route path='/dashboard' component={Dashboard} />
          <Route exact path="/" component={Login} />
          <Route >
            <Redirect to="/" />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
