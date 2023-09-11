
// In an MVC framework, the model represents the data layer.
// While representing the application's data and business logic.
// It's responsible for interacting with the database and preparing data to be displayed in the view.

const mongoose = require('mongoose'); // importing mongoose

const contactSchema = new mongoose.Schema({ // creating schema for contact list app
    name : {
        type: String,
        required: true
           },
    phone: {
            type: Number,
            required: true
           }
});

const Contact = mongoose.model('Contact', contactSchema); // creating model
module.exports = Contact; // exporting model