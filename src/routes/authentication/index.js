const express = require('express')
const createCookieToken = require('../../api/v1/authentication/controllers/createCookieToken')
const logout = require('../../api/v1/authentication/controllers/logout')
const router = express.Router()

router.post('/jwt', createCookieToken)
router.post('/logout', logout)

module.exports = router