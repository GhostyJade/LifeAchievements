import React, { Component } from "react"

import Header from './parts/Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Redirect } from 'react-router-dom'

//mail and password validations dependencies
const emailValidator = require('email-validator')
const passwordValidator = require('password-validator')
const schema = new passwordValidator()

export default class Register extends Component {

    constructor(props) {
        super(props)
        schema
            .is().min(8)                                    // Minimum length 8
            .is().max(100)                                  // Maximum length 100
            .has().uppercase()                              // Must have uppercase letters
            .has().lowercase()                              // Must have lowercase letters
            .has().digits()                                 // Must have digits
            .has().not().spaces()                           // Should not have spaces
        this.state = { data: { name: '', surname: '', username: '', email: '', usrPassword: '' }, errorstyles: { mail: false }, redirect: false }
    }

    performRegistration = (event) => {
        console.log(this.state)
        event.preventDefault()
        if (this.checkData()) {
            fetch('http://localhost:8080/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(this.state.data) })
                .then(response => response.json()).then(e => console.log(e))
        }
    }

    verifyPassword = (e) => {
        const password = e.target.value
        if (!schema.validate(password)) {
            schema.validate(password, { list: true })
        }
    }

    updateData = (e) => {
        var oldData = this.state.data
        oldData[e.target.name] = e.target.value
        this.setState({ data: oldData })
    }

    checkData = () => {

        return true;
    }

    checkEmail = (e) => {
        const mail = e.target.value
        if (emailValidator.validate(mail))
            this.setState({ data: { [e.target.name]: mail }, errorstyles: { mail: false } })
        else
            this.setState({ errorstyles: { mail: true } })
    }

    renderRedirect = () => {
        if (this.state.redirect)
            return <Redirect to="/" />
    }

    render() {
        //TODO add born date
        //TODO add password hint-errors
        const mailError = this.state.errorstyles.mail ? "is-danger" : ""
        return (
            <>
                <Header />
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-8">
                            <form onSubmit={this.performRegistration}>

                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Full Name</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <div className="control">
                                                <input className="input" type="text" name="name" id="name" onChange={this.updateData} />
                                            </div>
                                            <p className="help">First Name</p>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input" type="text" name="surname" id="surname" onChange={this.updateData} />
                                            </div>
                                            <p className="help">Last Name</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control">
                                        <input className="input" type="text" name="username" id="username" onChange={this.updateData} autoComplete="username" />
                                    </div>
                                </div>

                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Email</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <div className="control">
                                                <input className={"input " + mailError} type="email" name="email" id="email" onChange={this.checkEmail} autoComplete="email" />
                                            </div>
                                            <p className="help">Email</p>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input" type="email" name="confirmEmail" id="confirmEmail" autoComplete="email" />
                                            </div>
                                            <label className="help">Confirm Email</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="field is-horizontal">
                                    <div className="field-label is-normal">
                                        <label className="label">Password</label>
                                    </div>
                                    <div className="field-body">
                                        <div className="field">
                                            <div className="control has-icons-left">
                                                <input className="input" type="password" name="usrPassword" onChange={this.updateData} autoComplete="new-password" id="usrPassword" />
                                                <span className="icon is-medium is-left">
                                                    <i><FontAwesomeIcon icon="key" /></i>
                                                </span>
                                            </div>
                                            <p className="help">Password</p>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input" type="password" name="confirmPassword" autoComplete="new-password" id="confirmPassword" />
                                            </div>
                                            <label className="help">Confirm password</label>
                                        </div>
                                    </div>
                                </div>

                                <input className="button" value="Register" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>

                {this.renderRedirect()}
            </>
        )
    }
}