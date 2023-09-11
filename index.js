const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/db');
const Contact = require('./models/contact');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());

app.get('/', function(req, res){
    return res.render('contact', {
        title:"this is my project"
    })
})

app.listen(port, function(err){
    if(err){
        console.log('error in running the server');
    }
    console.log('server is running on port', port);
})