import React from 'react'

import { ListItem, Fab, makeStyles } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import AchievementsMaker from './AchievementsMaker'

const useStyles = makeStyles(theme => ({
    fabNew: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}))

export default function AchievementsViewer() {

    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const onClose = () => {
        setOpen(false)
    }

    return (
        <>

            {open ? <AchievementsMaker onClose={onClose} /> : null}
            <ListItem>

            </ListItem>
            <Fab onClick={setOpen} className={classes.fabNew}>
                <AddIcon />
            </Fab>
        </>
    )
}