"use strict"

const Achievement = require('./Achievement')
const Board = require('./Board')

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


    newAchievement = (username, title, data, boardid = 0) => {
        const user = this.db.get('users').find({ username }).value()
        console.log(user)
        const boardColleciton = this.db.get('boards')
        console.log(boardColleciton)
        const achievement = new Achievement(this.shortid.generate(), title, data, null)

    }
}

module.exports = DataUtils
