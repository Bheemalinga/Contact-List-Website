const express = require('express');
const Router = express.Router();
const contactController = require('../controller/contactController')

Router.get('/',contactController.get);
Router.post('/',contactController.ContactRegistered);

module.exports = Router