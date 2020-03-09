import React, { Component } from "react"

import Header from './parts/Header'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { username: "", password: "" }
    }

    performLogin = (event) => {
        event.preventDefault()
        console.log(event)
    }

    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <form onSubmit={this.performLogin}>
                                <div className="field">
                                    <label className="label">Username</label>
                                    <input className="input" name="username" type="text" required />
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <input className="input" type="password" name="password" required />
                                </div>
                                <div className="field is-grouped is-grouped-centered">
                                    <div className="control">
                                        <input type="submit" className="button" value="Log in" />
                                    </div>
                                    <div className="control">
                                        <a>Forgot password?</a>
                                    </div>
                                </div>
                            </form>
                            <div className="column is-6">
                                <a href="/register">Create an account <FontAwesomeIcon icon="arrow-right"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}