//The api routes are for our data.
//Helps determine what data the user sees, as well as what data the user is able to post to our server to store.

var friends = require('..data/friends.js');

//Routing
module.exports = function(app) {

    //API GET request
    app.get('/api/friends', function(req, res) {
        res.json(friends)
    });

    //API POST request
    app.post('/api/friends', function(req, res) {

    });

    
}


