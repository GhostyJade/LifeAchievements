import React from 'react'

import { ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'
import {
    DeleteForever as DeleteIcon
} from '@material-ui/icons'

import { CallToAction as CallToActionIcon } from '@material-ui/icons' //TODO placeholder, change me plz

export default function Board(props) {

    return (
        <ListItem onClick={props.handleClick} button>
            <ListItemIcon><CallToActionIcon /></ListItemIcon>
            <ListItemText>{props.boardData.name}</ListItemText>
            <IconButton id={props.boardData.id} onClick={props.onDeleteBoard}><DeleteIcon /></IconButton>
        </ListItem>
    )

}