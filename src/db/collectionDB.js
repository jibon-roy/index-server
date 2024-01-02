const client = require("./client");


const database = client.db('IndexDB');
const usersCollection = database.collection('users');

module.exports = { database, usersCollection }