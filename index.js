const express = require('express'); // importing express
// importing path
const path = require('path'); // importing path for setting views directory
const port = 8080; // port number
const app = express(); // creating express instance
const db = require('./config/db'); // importing database
const Contact = require('./models/contact'); // importing model
const contactRouter = require('./routes/contact'); // importing router

app.set('view engine', 'ejs'); // setting view engine
app.set('views', './views'); // setting views directory

app.use(express.urlencoded()); // using express.urlencoded middleware
app.use('/',contactRouter); // using contactRouter middleware

app.get('/', function(req, res){ // this is get request
    return res.render('contact') // rendering contact.ejs
})

app.listen(port, function(err){ // listening on port
    if(err){
        console.log('error in running the server');
    }
    console.log(`server is running on port: ${port}`);
})