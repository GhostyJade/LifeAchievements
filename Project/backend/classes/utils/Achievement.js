class Achievement {

    constructor(id, title, data, priority) {
        this.id = id
        this.title = title
        this.data = data
        this.priority = priority
    }

    toJson() {
        return {
            id, title, data, priority
        }
    }

}
module.exports = Achievement