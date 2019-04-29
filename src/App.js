import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Landing from './components/layout/Landing'
import MovieShow from './components/movieShow/MovieShow'
import TvShow from './components/movieShow/TvShow'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/movie/:id" component={MovieShow} />
              <Route path="/tv/:id" component={TvShow} />
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
