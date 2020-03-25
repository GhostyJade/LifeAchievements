"use strict"

const Achievement = require('./Achievement')
const Board = require('./Board') //TODO implement me plz, I'm useful :D

class DataUtils {
    constructor(shortid, dbInstance) {
        this.shortid = shortid
        this.db = dbInstance
    }

    newBoard = (username, name) => {
        let boards = this.db.get('users').find({ username }).get('boards').value()
        if (boards.find(e => { return e.name === name }))
            return { status: false, result: "board already exists" }; //TODO handle existing board
        const element = { id: this.shortid.generate(), name }
        boards.push(element)
        this.db.get('users').find({ username }).assign({ boards }).write()
        this.db.get('boards').push({ id: element.id, achievements: [] }).write()
        return { status: true, result: "board created", data: element }
    }

    getAllBoards = (username) => {
        const boards = this.db.get('users').find({ username }).get('boards').value()
        return { status: true, result: "got boards", boards }
    }

    deleteBoard = (username, boardId) => {
        const board = this.db.get('boards').remove({ id: boardId }).write()
        this.db.get('users').find({ username }).get('boards').remove({ id: boardId }).write() //this return a value
        let id = 0
        if (board)
            id = board[0].id
        return { deleted: true, id }
    }

    getAllAchievementFromBoard = (boardId) => {
        const data = this.db.get('boards').find({ id: boardId }).value()
        return { status: true, data }
    }

    newAchievement = (boardId, title, data) => {
        const boardCollection = this.db.get('boards').find({ id: boardId }).value()
        if (boardCollection) { //? is this needed?
            const achievement = new Achievement(this.shortid.generate(), title, data, null, null).toJson()
            this.db.get('boards').find({ id: boardId }).get('achievements').push(achievement).write()
            return { created: true, "achievement":achievement }
        }
    }
}

module.exports = DataUtils
