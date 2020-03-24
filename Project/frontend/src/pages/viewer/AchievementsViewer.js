import React from 'react'

import { Fab, makeStyles } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import AchievementsMaker from './AchievementsMaker'
import LeftSideBar from './LeftSideBar'
import BoardMaker from './BoardMaker'

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
    const [boardMakerVisible, setBoardMakerVisible] = React.useState(false)
    const [boards, setBoards] = React.useState({ list: [] })

    const onClose = () => {
        setOpen(false)
    }

    const addBoard = (board) => {
        setBoards({ list: [...boards.list, board] })
    }

    const getBoardsList = () => { //TODO
        console.error("NOT YET IMPLEMENTED")
    }

    return (
        <>
            <LeftSideBar boards={boards.list} makerAction={setBoardMakerVisible} />
            {boardMakerVisible ? <BoardMaker addData={addBoard} makerAction={setBoardMakerVisible} /> : null}
            {open ? <AchievementsMaker onClose={onClose} /> : null}
            <Fab onClick={setOpen} className={classes.fabNew}>
                <AddIcon />
            </Fab>
        </>
    )
}