import React, { useState } from 'react'

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { get } from '../../utils/localstoragehelper'
import { AppBar, DialogContent, TextField, Dialog, Toolbar, IconButton, Typography, DialogActions, Button, Grid, FormControl, InputLabel } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

const useStyles = makeStyles((theme) => {
    createStyles({
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
    })
})

export default function BoardMaker(props) {
    const classes = useStyles()

    const [board, setBoard] = React.useState({ name: '' })

    const onBoardNameChange = (e) => {
        setBoard({ name: e.target.value })
    }

    const handleClose = () => {
        props.makerAction(false)
    }

    const handleNewBoard = () => {
        if (board.name !== "") {
            fetch('http://localhost:8080/boards', {
                method: 'POST',
                headers: {
                    'x-access-token': get("token"),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": get("username"),
                    "name": board.name
                })
            }).then(result => result.json()).then(response => {
                console.log(response)
                if (response.status) {
                    if (response.board.status) {
                        props.addData(response.board.data)
                        handleClose()
                    }
                }
            })
        }
    }

    return (
        <Dialog open={true}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton onClick={handleClose} edge="start" color="inherit" aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        New board
                    </Typography>
                </Toolbar>
            </AppBar>
            <DialogContent>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <FormControl>
                            <TextField label="Board name" id="board-name" onChange={onBoardNameChange} />
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleNewBoard}>Create</Button>
            </DialogActions>
        </Dialog>
    )
}