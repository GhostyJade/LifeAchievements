const getErrorMessageFromCode = (errorCode) => {
    if (errorCode == 403)
        return "unauthorized"
    else if (errorCode == 404)
        return "not found"
    else if (errorCode == 200)
        return "ok"
}

const generateResultObject = (status, errorCode = 200) => {
    return {
        status,
        error: {
            code: errorCode,
            message: getErrorMessageFromCode(errorCode)
        }
    }
}

module.exports = generateResultObject