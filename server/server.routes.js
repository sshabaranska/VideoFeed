var _ = require('lodash');
var unirest = require('unirest');

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
module.exports = function (app) {
    app.get('/videos/:type', function (req, res) {
        var type = req.params.type;
        queryVideos(res, type);
    });
};