const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const port = 3000;

require('./models/users');
require('./config/passport');

var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/bookPinApp';
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURI, {useNewUrlParser: true});

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())

var routesApi = require('./routes/index')
app.use('/api', routesApi);

//error handlers
app.use((err, req, res, next) => {
    if (err.name == "unauthorizedError"){
        res.status(401);
        res.json({"message" : err.name + ": " + err.message})
    }
    console.log(err.message);
});
app.get('/favicon.ico', (req, res) => res.status(204));
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
module.exports = app;