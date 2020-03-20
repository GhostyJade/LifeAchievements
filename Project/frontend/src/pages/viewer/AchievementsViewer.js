import React, { Component } from 'react'

import Achievement from './Achievement'

import { Button, ListItem } from '@material-ui/core'
import AchievementsMaker from './AchievementsMaker'

export default class AchievementsViewer extends Component {

    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    handleNew = () => {
        this.setState({ open: true })
    }

    setClose = () => {
        this.setState({ open: false })
    }

    render() {
        return (
            <>
                <Button onClick={this.handleNew}>
                    New
                </Button>
                <AchievementsMaker open={this.state.open} onClose={()=>this.setClose()}/>
                <ListItem>
                    
                </ListItem>
            </>
        )

    }
}