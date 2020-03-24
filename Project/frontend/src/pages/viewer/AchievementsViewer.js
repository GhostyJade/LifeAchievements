import React, { useEffect } from 'react'

import { get } from '../../utils/localstoragehelper'
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
    const [fetched, setFetched] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [boardMakerVisible, setBoardMakerVisible] = React.useState(false)
    const [boards, setBoards] = React.useState({ list: [] })

    function deleteBoard(id) {
        const filteredBoards = boards.list.filter(board => board.id !== id)
        console.log(filteredBoards)
        setBoards({ list: filteredBoards })
    }

    const onClose = () => {
        setOpen(false)
    }

    const addBoard = (board) => {
        setBoards({ list: [...boards.list, board] })
    }

    const getBoardsList = () => {
        const username = get('username')
        fetch(`http://localhost:8080/boards/${username}`, {
            method: 'POST',
            headers: {
                'x-access-token': get('token'),
                'Content-Type': 'application/json' //IS THIS NEEDED? (i mean, there's no body)
            },
        }).then(response => response.json()).then(result => {
            if (result.status) {
                if (result.board.status) {
                    setBoards({ list: result.board.boards })
                }
            }
        })
    }

    useEffect(() => {
        if (!fetched) {
            getBoardsList()
            setFetched(true)
        }
    })



    return (
        <>
            <LeftSideBar boards={boards.list} updateBoards={deleteBoard} makerAction={setBoardMakerVisible} />
            {boardMakerVisible ? <BoardMaker addData={addBoard} makerAction={setBoardMakerVisible} /> : null}
            {open ? <AchievementsMaker onClose={onClose} /> : null}
            <Fab onClick={setOpen} className={classes.fabNew}>
                <AddIcon />
            </Fab>
        </>
    )
}