const express = require('express')
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 5000

// middlewares
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174']
}))

app.use(express.json())






// apis
app.get('/', (req, res) => {
    res.send('Server is running')
})


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})