import React, { Component } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from './parts/Header'

export default class Home extends Component {
    render() {
        return (
            <>
                <div className="hero is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="title">Life Achievements</p>
                            <p className="subtitle">Make achievements, improve your life, together.</p>
                            <p>
                                <a href="#page-content">
                                    <span className="icon is-large">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa-stack-2x has-text-primary">
                                                <FontAwesomeIcon icon="circle" size="2x" />
                                            </i>
                                            <i className="fa-stack-2x has-text-white">
                                                <FontAwesomeIcon icon="angle-down" size="2x" />
                                            </i>
                                        </span>
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <Header />
                <div id="page-content" className="container">
                </div>
            </>
        )
    }
}