const { usersCollection } = require("../../../db/collectionDB");


const getUsers = async (req, res) => {
    const data = await usersCollection.find().toArray()
    res.send(data)
}

module.exports = { getUsers };