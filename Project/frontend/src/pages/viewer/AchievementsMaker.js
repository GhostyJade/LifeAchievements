import React from 'react'

import { get } from '../../utils/localstoragehelper'

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Button, Grid, AppBar, Toolbar, Dialog, IconButton, Typography, TextField, DialogActions, Input, DialogContent, FormControl, InputLabel, Slide } from '@material-ui/core'
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

const slideUp = React.forwardRef(function Transition(props, ref) {
    return (
        <Slide direction="up" ref={ref} {...props} />
    )
})

export default function AchievementsMaker(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(true)
    const [achievementData, setAchievementData] = React.useState({ title: '', data: '' })

    const handleClose = () => {
        setOpen(false)
        props.onClose()
    };

    const handleNewAchievement = () => {
        if (achievementData.name !== "" && achievementData.data !== "") {
            fetch(`http://localhost:8080/achievements/`, {
                method: 'POST',
                headers: {
                    'x-access-token': get("token"),
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": get("username"),
                    "boardId": props.boardId,
                    "achievement": { title: achievementData.title, data: achievementData.data }
                })
            }).then(result => result.json()).then(e => console.log(e))
        }
    }

    const cancelNewAchievement = () => {
        setAchievementData({ title: '', data: '' })
        handleClose()
    }

    const onAchievementNameChange = (e) => {
        setAchievementData({ title: e.target.value, data: achievementData.data })
    }

    const onAchievementContentChange = (e) => {
        setAchievementData({ title: achievementData.title, data: e.target.value })
    }

    return (
        <Dialog open={open} onClose={handleClose} TransitionComponent={slideUp} >
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        New Achievement
                    </Typography>
                </Toolbar>
            </AppBar>
            <DialogContent>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="achievement-name">Achievement name</InputLabel>
                            <Input id="achievement-name" onChange={onAchievementNameChange} />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <FormControl>
                            <TextField id="achievement-content" onChange={onAchievementContentChange} label="Achievement content" />
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={cancelNewAchievement}>
                    Cancel
                </Button>
                <Button onClick={handleNewAchievement}>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}
