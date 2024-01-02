const { usersCollection } = require("../../../db/collectionDB");



const createUser = async (req, res) => {
    const userData = req.body
    const data = await usersCollection.insertOne(userData)
    res.send(data)

}

module.exports = { createUser };