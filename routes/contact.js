const express = require('express'); // importing express
const Router = express.Router(); // creating router instance
const contactController = require('../controller/contactController') // importing contactController

Router.get('/',contactController.getAllData); // this is get request
Router.post('/create-contact',contactController.ContactRegistered); // this is post request

Router.get('/delete-contact',contactController.deleteContact); // this is query string

module.exports = Router // exporting router