const client = require('./client');


const connectDB = async () => {


    await client.connect();
    console.log('Connected to database.')


}



module.exports = connectDB