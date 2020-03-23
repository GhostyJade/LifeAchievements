import React from 'react'

import { get } from '../../utils/localstoragehelper'
import { AppBar,DialogContent, TextField, Dialog, Toolbar, IconButton, Typography, DialogActions, Button, Grid, FormControl } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

export default function BoardMaker(props) {
    const [open, setOpen] = React.useState(true)
    const [board, setBoard] = React.useState({ name: '' })

    const onBoardNameChange = (e) => {
        setBoard({ name: e.target.value })
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
            }).then(result => result.json()).then(e => console.log(e))
        }
    }

    return (
        <Dialog open={open}>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                    <Typography>
                        New board
                    </Typography>
                </Toolbar>
            </AppBar>
            <DialogContent>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <FormControl>
                            <TextField id="board-name" onChange={onBoardNameChange} />
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button>Cancel</Button>
                <Button>Create</Button>
            </DialogActions>
        </Dialog>
    )
}