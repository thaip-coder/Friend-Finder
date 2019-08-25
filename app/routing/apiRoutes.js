//The api routes are for our data.
//Helps determine what data the user sees, as well as what data the user is able to post to our server to store.

var friends = require('../data/friends.js');

//Routing
module.exports = function(app) {

    //API GET request
    app.get('/api/friends', function(req, res) {
        res.json(friends)
    });

    //API POST request
    app.post('/api/friends', function(req, res) {
        var userScore = req.body.scores;
        var scoreArray = [];
        var pkmnMatch = 0;
        var userArray = parseInt(userScore);
        

        //For loop that runs through all pokemon and calculates scores for each one according to user input
        for(var i = 0; i < friends.length; i++) {
            var scoreDifference = 0;
            for(var j = 0; j < userArray.length; j++) {
                scoreDifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userArray[j])));
            }
            //Pushes all results to scoreArray
            scoreArray.push(scoreDifference);
        }

        //Finds best match after comparing pokemon scores to user input
        for(var i = 0; i < scoreArray.length; i++) {
            if(scoreArray[i] <= scoreArray[pkmnMatch]){
                pkmnMatch = i;
            }
        }

        //Assigns best matched pokemon
        var pokemon = friends[pkmnMatch];
        res.json(pokemon);                      

    });  


}


