
const express = require('express')
const { createUser } = require('../../api/v1/user/createUser')
const { getUsers } = require('../../api/v1/user/getUser')
const router = express.Router()

router.post('/users/createUser', createUser)
router.get('/users', getUsers)

module.exports = router