import React, { useState } from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ResetPassword from './pages/Auth/ResetPassword';
import List from './pages/List';
import Add from './pages/Add';
import Groups from './pages/Groups';
import Profile from './pages/Profile';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#007370',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#999999',
    },
  },
});


function App() {
  return (
      <CssBaseline>
        <ThemeProvider>
          <Router>
              <Switch>
                <Route exact path='/list' component={List}/>
                <Route exact path='/add' component={Add}/>
                <Route exact path='/groups' component={Groups}/>
                <Route exact path='/resetpassword' component={ResetPassword}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>

                <Route>
                  <h1>Error 404: The page you're looking for does not exist</h1>
                </Route>
              </Switch>

          </Router>
        </ThemeProvider>
      </CssBaseline>
  );
}

export default App;
