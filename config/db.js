const mongoose = require('mongoose'); // importing the mongoose module

// Below line copied from the mongoDB website, connecting to the database
// mongodb+srv://<username>:<password>@cluster0.vwuysw7.mongodb.net/ should be present in the below connect paranthesis
mongoose.connect()

const db = mongoose.connection; // creating the connection

db.on('error',(error) => {
    console.log('Error in connecting to the database')}); // checking for error

db.once('open', () => { // checking for success
    console.log('Successfully connected to the database');
});
