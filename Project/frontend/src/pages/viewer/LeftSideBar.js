import React from 'react'
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import {
    Menu as MenuIcon,
    Dashboard as DashboardIcon,
    Add as AddIcon
} from '@material-ui/icons'
import { CallToAction as CallToActionIcon } from '@material-ui/icons' //TODO placeholder, change me plz

const useStyles = makeStyles({
    list: {
        width: 250
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

    const boardList = () => {
        if (props.boards !== undefined)
            return props.boards.map((board, index) => (
                <ListItem button key={board.id}>
                    <ListItemIcon><CallToActionIcon /></ListItemIcon>
                    <ListItemText>{board.name}</ListItemText>
                </ListItem>
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
                    <ListItem>
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