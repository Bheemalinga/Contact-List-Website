const express = require('express');
// importing path
const path = require('path');
const port = 8080;
const app = express();
const db = require('./config/db');
const Contact = require('./models/contact');
const contactRouter = require('./routes/contact');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());
app.use('/',contactRouter);

app.get('/', function(req, res){
    return res.render('contact', {
        title:"this is my project"
    })
})

app.listen(port, function(err){
    if(err){
        console.log('error in running the server');
    }
    console.log(`server is running on port: ${port}`);
})