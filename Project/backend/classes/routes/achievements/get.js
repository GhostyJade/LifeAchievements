const validateToken = require('../../utils/ValidateToken')

module.exports = function GetAchievements(app, DataUtils) {
    app.get('/boards/:username/:boardid', async (req, res) => {
        let result = await validateToken(req, res)
        if (result.status) {
            const { boardid } = req.params
            result.achievements = DataUtils.getAllAchievementFromBoard(boardid)
        }
        res.send(result)
    })
}