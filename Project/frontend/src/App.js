import React from 'react';

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

import "./style.scss"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
