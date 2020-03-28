import React from 'react';

import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import Dashboard from './pages/viewer/Dashboard'

import "./style.scss"

import { get } from './utils/sessionstoragehelper'

import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom"

function isLoggedIn() {
    if (get("username") && get("token"))
        return true
    return false
}

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    {isLoggedIn() ? <Redirect to="/dashboard" /> : <Login />}
                </Route>
                <Route path="/dashboard">
                    {isLoggedIn() ? <Dashboard /> : <Redirect to="/login" />}
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
