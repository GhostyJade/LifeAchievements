import React from 'react'
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import {
    Menu as MenuIcon,
    Dashboard as DashboardIcon,
    Add as AddIcon
} from '@material-ui/icons'

import Board from './Board'

import { get } from '../../utils/storagehelper'

const useStyles = makeStyles({
    list: {
        width: 300
    }
})

export default function LeftSideBar(props) {

    const classes = useStyles()

    const [state, setState] = React.useState(false)

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
            return
        setState(open)
    }

    const deleteBoard = (e) => {
        e.stopPropagation()
        const username = get('username')
        const boardId = e.currentTarget.id
        fetch(`http://localhost:8080/boards/${username}/${boardId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', //IS THIS NEEDED? (i mean, there's no body)
                'x-access-token': get('token')
            }
        }).then(response => response.json()).then(result => {
            if (result.status) {
                if (result.board.deleted) {
                    props.updateBoards(boardId)
                }
            }//TODO handle, again, exceptions
        })
    }

    const handleSelectAchievementBoard = (id) => {
        props.selectionAction(id)
    }

    const boardList = () => {
        if (props.boards !== undefined)
            return props.boards.map((board, index) => (
                <Board key={board.id} handleClick={() => handleSelectAchievementBoard(board.id)} boardData={board} onDeleteBoard={deleteBoard}/>
            ))
    }

    const newBoard = () => {
        setState(false)
        props.makerAction(true)
    }

    return (
        <React.Fragment key="left">
            <IconButton onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
            <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
                <List className={classes.list}>
                    <ListItem key="topElement">
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText>Boards</ListItemText>
                        <ListItemIcon onClick={newBoard}><IconButton><AddIcon /></IconButton></ListItemIcon>
                    </ListItem>
                    {boardList()}
                </List>
            </Drawer>
        </React.Fragment>
    )
} 