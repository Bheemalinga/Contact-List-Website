const express = require('express');
const Router = express.Router();
const contactController = require('../controller/contactController')

Router.get('/',contactController.getAllData);
Router.post('/create-contact',contactController.ContactRegistered);

module.exports = Router