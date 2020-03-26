import React from 'react'

import { Button, Typography, Card, IconButton, CardActions, makeStyles, Grid, CardContent } from '@material-ui/core'

import { DeleteForever as DeleteIcon, Edit as EditIcon } from '@material-ui/icons'

const useStyles = makeStyles({
    root: {
        minWidth: 275
    }
})

export default function Achievement(props) {
    //missing expireDate and priority fields
    const classes = useStyles()
    return (
        <Card className={classes.root} id={props.data.id} variant="outlined">
            <CardActions>
                <Grid container>
                    <Grid item xs={4}>
                        <Typography gutterBottom>{props.data.title}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <IconButton><EditIcon /></IconButton>
                        <IconButton><DeleteIcon /></IconButton>
                    </Grid>
                </Grid>
            </CardActions>
            <CardContent>
                <Typography>{props.data.content}</Typography>
            </CardContent>
        </Card>
    )
}