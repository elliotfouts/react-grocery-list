import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ResetPassword from './pages/Auth/ResetPassword';


function App() {
  return (
      <CssBaseline>
        <Router>
            <Switch>
              <Route exact path='/resetpassword'>
                <ResetPassword/>
              </Route>
              <Route exact path='/login'>
                <Login/>
              </Route>
              <Route exact path='/register'>
                <Register/>
              </Route>
              <Route>
                <h1>Error 404: The page you're looking for does not exist</h1>
              </Route>
            </Switch>

        </Router>
      </CssBaseline>
  );
}

export default App;
