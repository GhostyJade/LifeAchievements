import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <div className="navbar-item">
                            Life Achievements
                        </div>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarContainer">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarContainer" className="navbar-menu">
                        <div className="navbar-start">
                            <a href="navbar-item">Home</a>
                            <a href="navbar-item">About</a>
                        </div>
                        <div className="navbar-end">
                            <a href="navbar-item">Register</a>
                            <a href="navbar-item">Login</a>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}