import React from 'react'

import { Button, Typography, Card, IconButton } from '@material-ui/core'

import { DeleteForever as DeleteIcon } from '@material-ui/icons'

export default function Achievement(props) {
    console.log(props.data)
    return (
        <Card>
            <IconButton><DeleteIcon /></IconButton>
        </Card>
    )
}