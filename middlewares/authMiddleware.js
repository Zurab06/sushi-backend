const jwt = require('jsonwebtoken')
const { secret } = require('../config')

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(403).json({ message: 'доступ только для админа не токена' })
        }
        const decodedData = jwt.verify(token, secret)

        req.user = decodedData
        console.log(req.user);
        next()
    } catch (error) {
        console.log(error.message)
        return res.status(403).json({ message: 'доступ только для админа ' })
    }
}