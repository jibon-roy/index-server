const express = require('express')
const createCookieToken = require('../../api/v1/authentication/controllers/createCookieToken')
const router = express.Router()

router.post('/jwt', createCookieToken)
router.post('/logout', async (res, req) => {
    req.clearCookie('token', { maxAge: 0 }).send({ success: true })
})

module.exports = router