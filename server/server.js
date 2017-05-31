// set up ======================================================================
var express = require('express');
var app = express(); 
var port = process.env.PORT || 8088;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===============================================================
app.use(express.static('../dev')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended': 'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 
app.use(methodOverride('X-HTTP-Method-Override'));

// routes ======================================================================
require('./server.routes.js')(app);

// application -------------------------------------------------------------
app.get('*', function (req, res) {
    res.sendFile(__dirname + '../dev/index.html');

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);