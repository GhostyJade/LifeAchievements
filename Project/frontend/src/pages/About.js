import React, { Component } from 'react'

import Header from './parts/Header'

export default class About extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p>About</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}