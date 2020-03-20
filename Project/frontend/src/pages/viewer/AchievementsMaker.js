import React, { Component } from 'react'

import { get } from '../../utils/localstoragehelper'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, ListItem, Grid, AppBar, Toolbar, Dialog, IconButton, List, Typography, ListItemText, Divider, TextField, DialogActions, FormGroup, Input, DialogContent, FormControl, InputLabel } from '@material-ui/core'
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
export default function AchievementsMaker(props) {
    const classes = useStyles();

    const [achievementData, setAchievementData] = React.useState({ name: '', data: '' })

    const handleClose = () => {
        props.onClose();
    };

    const handleNewAchievement = () => {
        if (achievementData.name !== "" && achievementData.data !== "") {
            fetch('localhost:8080/achievements/', {
                method: 'POST',
                headers: {
                    'x-access-token': get("token")
                },
                body: JSON.parse({
                    "username": get("username"),
                    "achievement": { achievementData }
                })
            })
        }
    }

    const cancelNewAchievement = () => {
        setAchievementData({ name: '', data: '' })
        handleClose()
    }

    return (

        <Dialog open={props.open} onClose={props.onClose} >
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
                <form>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item>
                            <FormControl>
                                <InputLabel htmlFor="achievement-name">Achievement name</InputLabel>
                                <Input id="achievement-name" />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Grid item>
                            <FormControl>
                                <TextField id="achievement-content" label="Achievement content" />
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
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
