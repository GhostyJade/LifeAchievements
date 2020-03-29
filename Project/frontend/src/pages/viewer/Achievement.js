import React from 'react'

import { Typography, Card, IconButton, makeStyles, Grid, CardContent, CardHeader, CardActions } from '@material-ui/core'

import { DeleteForever as DeleteIcon, Edit as EditIcon } from '@material-ui/icons'

const useStyles = makeStyles({
    root: {
        maxWidth: 375
    },
    title:{
        font:12
    }
})

export default function Achievement(props) {
    //missing expireDate and priority fields
    const classes = useStyles()
    return (
        <Card className={classes.root} id={props.data.id} variant="outlined">
            <CardHeader title={
                <Typography variant="h6">
                    {props.data.title}
                </Typography>
                } className={classes.title} />
            <CardContent>
                <Typography variant="body1" component="p">{props.data.content}</Typography>
            </CardContent>
            <CardActions>
                <Grid container>
                    <Grid item xs={12}>
                        <IconButton disabled><EditIcon /></IconButton>
                        <IconButton disabled><DeleteIcon /></IconButton>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}