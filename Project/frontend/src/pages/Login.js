import React, { Component } from "react"
import { Redirect } from 'react-router-dom'

import placeholder from '../images/placeholder.png'

import Header from './parts/Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { set } from '../utils/storagehelper'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { username: "", password: "", redirect: false }
    }

    async redirect() {
        await new Promise(resolve => this.setState({ redirect: true }, () => resolve()))
    }

    performLogin = (event) => {
        event.preventDefault()
        fetch("http://localhost:8080/users/" + this.state.username, {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state)
        }).then(response => response.json()).then(data => {
            if (data.authenticated) {
                set("username", this.state.username)
                set("token", data.token)
                return true
            }
            return false
        }).then(result => {
            if (result) {
                this.redirect()
            }
        })
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }


    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    redirectToData = () => {
        if (this.state.redirect)
            return <Redirect to="/dashboard" />
        return <></>
    }

    render() {
        return (
            <>
                {this.redirectToData()}
                <Header />
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <figure className="image has-ratio is-4by3">
                                <img src={placeholder} alt="Login placeholder" />
                            </figure>
                        </div>
                        <div className="column">
                            <div className="columns is-centered">
                                <div className="column is-8">
                                    <form onSubmit={this.performLogin}>
                                        <div className="field">
                                            <label className="label">Username</label>
                                            <input className="input" name="username" type="text" onChange={this.handleUsernameChange} required />
                                        </div>
                                        <div className="field">
                                            <label className="label">Password</label>
                                            <input className="input" type="password" name="password" onChange={this.handlePasswordChange} required />
                                        </div>
                                        <div className="field is-grouped is-grouped-centered">
                                            <div className="control">
                                                <input type="submit" className="button is-primary is-rounded" value="Log in" />
                                            </div>
                                        </div>
                                        <div className="field is-grouped is-grouped-centered">
                                            <div className="control">
                                                <a>Forgot password?</a>
                                            </div>
                                        </div>
                                    </form>


                                    <div className="field is-grouped is-grouped-centered">
                                        <div className="control">
                                            <button className="button is-rounded" disabled>
                                                <span className="icon">
                                                    <FontAwesomeIcon icon={['fab', 'google']} />
                                                </span>
                                                <span>
                                                    Login with Google
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="column">
                                        <div className="has-text-centered">
                                            <a href="/register">Create an account <FontAwesomeIcon icon="arrow-right" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}