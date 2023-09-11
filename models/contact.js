const mongoose = require('mongoose'); // importing mongoose

const contactSchema = new mongoose.Schema({ // creating schema
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