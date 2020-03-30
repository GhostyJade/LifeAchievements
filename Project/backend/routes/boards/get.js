const validateToken = require('../../utils/ValidateToken')

module.exports = function GetBoards(app, DataUtils) {
    app.post('/boards/:username', async (req, res) => {
        let result = await validateToken(req, res)
        if (result.status) {
            const { username } = req.params
            result.board = DataUtils.getAllBoards(username)
        }
        res.send(result)
    })
}