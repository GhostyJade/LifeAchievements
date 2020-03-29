import React, { useEffect } from 'react'

import { Redirect } from "react-router-dom"

import { get, clear } from '../../utils/storagehelper'
import { Fab, makeStyles } from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import AchievementsMaker from './AchievementsMaker'
import LeftSideBar from './LeftSideBar'
import BoardMaker from './BoardMaker'
import BoardVisualizer from './BoardVisualizer'

const useStyles = makeStyles(theme => ({
    fabNew: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}))

export default function Dashboard() {

    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [boardMakerVisible, setBoardMakerVisible] = React.useState(false)
    const [boards, setBoards] = React.useState({ list: [] })
    const [selectedBoard, setSelectedBoard] = React.useState({ boardId: null })

    const [achievementsList, setAchievementsList] = React.useState(null)

    const updateAchievementsList = (newAchievement) => {
        const data = achievementsList
        data.push(newAchievement)
        setAchievementsList(data)
    }

    function deleteBoard(id) {
        const filteredBoards = boards.list.filter(board => board.id !== id)
        setBoards({ list: filteredBoards })
    }

    const openAchievementCreator = () => {
        if (selectedBoard.boardId != null)
            setOpen(true)
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

    function updateSelectedBoard(id) {
        setSelectedBoard({ boardId: id })
    }

    useEffect(() => {
        getBoardsList()
    }, [])

    if (!get("username") || !get("token")) {
        clear()
        return <Redirect to="/login" />
    } else
        return (
            <>
                <LeftSideBar selectionAction={updateSelectedBoard} boards={boards.list} updateBoards={deleteBoard} makerAction={setBoardMakerVisible} />
                {selectedBoard.boardId !== null ? <BoardVisualizer data={achievementsList} onDataChange={setAchievementsList} selected={selectedBoard} /> : null}
                {boardMakerVisible ? <BoardMaker addData={addBoard} makerAction={setBoardMakerVisible} /> : null}
                {open ? <AchievementsMaker onAchievementCreation={updateAchievementsList} boardId={selectedBoard.boardId} onClose={onClose} /> : null}
                <Fab onClick={openAchievementCreator} className={classes.fabNew}>
                    <AddIcon />
                </Fab>
            </>
        )
}