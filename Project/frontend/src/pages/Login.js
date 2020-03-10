import React, { Component } from "react"

import placeholder from '../images/placeholder.png'

import Header from './parts/Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { username: "", password: "" }
    }

    performLogin = (event) => {
        event.preventDefault()
        fetch('http://localhost:8080/users/',{
            method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(this.state)
        }).then(e=>console.log(e))
    }

    handleUsernameChange = (e) => {
        this.setState({ username: e.target.value })
    }


    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <figure className="image has-ratio is-4by3">
                                <img src={placeholder} alt="Login placeholder image" />
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