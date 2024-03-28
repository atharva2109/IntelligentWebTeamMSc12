const mongoose = require('mongoose');

// Defining the MongoDB connection URL
// Setting the database name `plant-recognition`
const mongoDB = 'mongodb://localhost:27017/plant-recognition';
let connection;

// Set Mongoose to use the global Promise library
mongoose.Promise = global.Promise;

// Connection to MongoDB Server
mongoose.connect(mongoDB).then(result => {

    // Stores the connection instance for later use if needed
    connection = result.connection;

    // Log a success message if the connection is established
    console.log("Connection Successful!");

}).catch(err => {

    // Log an error message if the connection fails
    console.log("Connection Failed!", err);

});