class Achievement {

    constructor(id, title, content, priority, expireDate) {
        this.id = id
        this.title = title
        this.content = content
        this.priority = priority
        this.expireDate = expireDate
    }

    toJson() {
        return {
            "id": this.id, "title": this.title, "content": this.content, "priority": this.priority, "expireDate": this.expireDate
        }
    }

}
module.exports = Achievement