const { verifyToken } = require('../services/access.service')

const confirmToken = async (token) => {
    const result = await verifyToken(token)
    return result
}

module.exports = { confirmToken }
