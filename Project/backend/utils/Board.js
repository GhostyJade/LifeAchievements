class Board {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    toJson = () => {
        return { id, name }
    }
}

module.exports = Board