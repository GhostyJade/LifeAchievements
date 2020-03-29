const validateToken = require('../../utils/ValidateToken')

module.exports = function DeleteBoard(app, DataUtils) {
    app.delete('/boards/:username/:boardid', async (req, res) => {
        let result = await validateToken(req, res)
        if (result.status) {
            const { username, boardid } = req.params
            result.board = DataUtils.deleteBoard(username, boardid)
        }
        res.send(result)
    })
}