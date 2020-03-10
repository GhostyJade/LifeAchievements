import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        // TODO add buger that display menu in mobile view
        return (
            <header>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                            Life Achievements
                        </a>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarContainer">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarContainer" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="/">
                                Home
                            </a>

                            <a className="navbar-item" href="/about">
                                About
                            </a>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <button className="button" href="#" disabled>Download</button>
                                    <a href="/register" className="button is-primary">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a href="/login" className="button is-light">
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}