const Contact = require('../models/contact'); // importing model

exports.ContactRegistered = async(req, res) => { // this is post request
    try {
        const {name,phone} = req.body; // destructuring req.body object to get name and phone number
        const contactCreated = await Contact.create({name,phone}); // creating contact
            console.log('contact created', contactCreated); // printing contact created
            return res.redirect('back'); // redirecting to back
    } catch (error) {
        console.log('error in creating contact');
        return res.redirect('back');        
    }
}

exports.getAllData = function(req, res){ // this is get request
    return res.render('contact') // rendering contact.ejs
}

exports.getAllData = async(req, res) => { // this is get request
    try {
        const contacts = await Contact.find({}).exec(); // fetching all contacts from database using find method of mongoose and exec method to execute query

        res.render('contact',{ // rendering contact.ejs
            title: "Contact List", // passing title
            contact_lists: contacts // passing contacts
        })
    }
    catch (error) {
        console.log('error in fetching contacts data from database');
        res.redirect('back');
    }
}


exports.deleteContact = async(req,res) => { // this is query string
    try {
        let id = req.query.id; // getting id from query string
        const deleted = await Contact.findByIdAndDelete(id); // deleting contact using findByIdAndDelete method of mongoose
        console.log('Contact deleted',deleted);
        return res.redirect('back'); // redirecting to back
    }catch (error) {
        console.log('error in deleting contact',error);
        return res.redirect('back');
    }
}