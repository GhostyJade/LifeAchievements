const validateToken = require('../../utils/ValidateToken')

module.exports = function NewBoard(app, DataUtils) {
    app.post('/boards', async (req, res) => {
        let result = await validateToken(req, res)
    
        if (result.status) {
            const { username, name } = req.body
            const newBoardResult = DataUtils.newBoard(username, name)
            result.board = newBoardResult
        }
        //TODO handle exception, again
        res.send(result)
    })
}