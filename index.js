const express = require('express'); // importing express
// importing path
const path = require('path'); // importing path for setting views directory
const port = 8080; // port number
const app = express(); // creating express instance, so that we can use express methods
const db = require('./config/db'); // importing database,to connect to the database
const Contact = require('./models/contact'); // importing model, to create schema
const contactRouter = require('./routes/contact'); // importing router, to use router middleware for routing
// middleware is used to convert the data into json format

app.set('view engine', 'ejs'); // setting view engine, for rendering ejs files
app.set('views', './views'); // setting views directory

app.use(express.urlencoded()); // using express.urlencoded middleware, to convert the data into json format
app.use('/',contactRouter); // using contactRouter middleware for routing inorder to avoid routing in index.js

app.get('/', function(req, res){ // this is get request for home page
    return res.render('contact') // rendering contact.ejs file
})

app.listen(port, function(err){ // listening on port
    if(err){
        console.log('error in running the server');
    }
    console.log(`server is running on port: ${port}`);
})