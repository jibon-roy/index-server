require('dotenv').config()


const config = {
    LOCAL_CLIENT: process.env.LOCAL_CLIENT,
    NORMAL_CLIENT: process.env.NORMAL_CLIENT
}

module.exports = config;