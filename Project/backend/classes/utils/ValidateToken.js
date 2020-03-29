const jwt = require('jsonwebtoken')

const validationFactory = require('./validation_util')

module.exports = async function ValidateToken(req, res) {
	const token = req.headers['x-access-token']
	var errorCode = 200
	var status = true

	if (!token) {
		errorCode = 403
		status = false
	}

	jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => { //decoded contains {username}
		if (err) {
			errorCode = 403
			status = false
		}
	})

	return validationFactory(status, errorCode)
}