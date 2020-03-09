import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        // TODO add buger that display menu in mobile view
        return (
            <header>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="#">
                            Life Achievements
                        </a>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarContainer">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarContainer" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item" href="/">
                                Home
                            </a>

                            <a class="navbar-item" href="/about">
                                About
                            </a>
                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="buttons">
                                    <a href="/register" class="button is-primary">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a href="/login" class="button is-light">
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