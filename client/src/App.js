import React, { useState } from "react";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Login, Register, ResetPassword, List, Add, Food, Profile, Settings, IndividualList} from './pages'

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
                <Route exact path='/list/:_id' component={IndividualList}/>
                <Route exact path='/add' component={Add}/>
                <Route exact path='/food/:_id' component={Food}/>
                <Route exact path='/profile/settings' component={Settings}/>
                <Route exact path='/profile' component={Profile}/>
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
