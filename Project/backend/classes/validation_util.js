const getErrorMessageFromCode = (errorCode) => {
    if (errorCode == 403)
        return "unauthorized"
    else if (errorCode == 404)
        return "not found"
    else if (errorCode == 0)
        return "ok"
}

const generateResultObject = (status, errorCode = 0) => {
    if (errorCode !== 0) {
        return {
            status,
            error: {
                code: errorCode,
                message: getErrorMessageFromCode(errorCode)
            }
        }
    }
}

module.exports = generateResultObject