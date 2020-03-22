"use strict"

class DataUtils {
    constructor(shortid, dbInstance) {
        this.shortid = shortid
        this.db = dbInstance
    }

    newAchievement = (username, title, data) => {
        const userId = this.db.get('users').find({username}).value()
    }
}

module.exports = DataUtils
