// set up ======================================================================
var express = require('express');
var app = express(); 						// create our app w/ express
var port = process.env.PORT || 8088; 				// set the port	
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
var unirest = require('unirest');


// configuration ===============================================================

app.use(express.static('./dev')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
function queryVideos(r, type) {
    // GET a resource
    unirest.get('https://cdn.playbuzz.com/content/feed/items')
        .end(function(res) {
            if (res.error) {
                r.send(res.error);
            } else {
                var items = [];
                var body = JSON.parse(res.body);
                if (type !== 'all') {
                    items = _.filter(body.items, function(item) { return item.source === type });
                    body.items = items;
                }
                r.json(body);
            }
        })
};

// api ---------------------------------------------------------------------
// get all videos
app.get('/videos/:type', function (req, res) {
    var type = req.params.type;
    queryVideos(res, type);
});

// application -------------------------------------------------------------
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dev/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });


// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);