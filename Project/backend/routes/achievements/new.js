const validateToken = require('../../utils/ValidateToken')

module.exports = function NewAchievement(app, DataUtils) {
    app.post('/achievements', async (req, res) => {
        let result = await validateToken(req, res)

        if (result.status) {
            const { title, data } = req.body.achievement
            const { boardId } = req.body
            result.achievements = DataUtils.newAchievement(boardId, title, data)
        }
        //TODO handle exception
        res.send(result)
    })
}