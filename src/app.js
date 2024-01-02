const express = require('express');
const { applyMiddleware } = require('./middlewares/applyMiddleware');
const connectDB = require('./db/connectDB');
require('dotenv').config();
const authenticationRoutes = require('./routes/authentication/index');
const userRoutes = require('./routes/user/index');


const app = express()
const port = process.env.PORT || 5000

applyMiddleware(app);

app.use(authenticationRoutes)
app.use(userRoutes)

const main = async () => {

    // connecting to database
    await connectDB()


    app.listen(port, () => {
        console.log(`Index is running on port: ${port}`)
    })

}

main();


app.get('/health', (req, res) => {
    res.send('Index is running.')
})

app.all('*', (req, res, next) => {
    const error = new Error(`The requested url is invalid:  [${req.url}] `)
    error.status = 404;
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})

