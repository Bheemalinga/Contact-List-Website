const Contact = require('../models/contact');

exports.ContactRegistered = async function(req, res){
    try {
        const {name,phone} = req.body;
        const contactCreated = await Contact.create({name,phone});
            console.log('contact created', contactCreated);
    } catch (error) {
        console.log('error in creating contact');
        return res.redirect('back');        
    }
}

exports.getAllData = function(req, res){
    return res.render('contact')
}