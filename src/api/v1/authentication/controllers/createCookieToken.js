const jwt = require('jsonwebtoken')
require('dotenv').config()

const createCookieToken = async (req, res, next) => {
    const user = req.body
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '12hr' })

    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    }).send({ success: true })
};

module.exports = createCookieToken;