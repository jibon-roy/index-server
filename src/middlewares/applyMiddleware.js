const cors = require('cors')
const express = require('express')
const cookieParser = require('cookie-parser')
const { LOCAL_CLIENT, NORMAL_CLIENT } = require('../config/default')


const applyMiddleware = (app) => {
    app.use(cors({
        origin: [
            LOCAL_CLIENT,
            NORMAL_CLIENT
        ],
        credentials: true
    }))

    app.use(express.json())
    app.use(cookieParser())
}

module.exports = { applyMiddleware };