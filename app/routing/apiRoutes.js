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
        var bestMatch = 0;
        var scoreDifference = 0;  
        var sum = 0;
        var friendSum = 0;    

        //User score sum
        for(var i = 0; i < userScore.length; i++) {
            sum = 0;
            sum = sum + parseInt(userScore[i]);
        };
        console.log(userScore);
        console.log(sum);
        
        //Traverses friends array
        for(var i = 0; i < friends.length; i++) {
            scoreDifference = 0;
            //Creates array for each Pokemon's values
            friendArray = friends[i].scores;
            //Calculates the scoreDifference between each Pokemon's values and the user's values
            for(var j = 0; j < friendArray.length; j++) {
                friendSum = 0;
                scoreDifference = scoreDifference + (Math.abs((friendSum += friendArray[j]) - sum));
            }
            //Pushes all results to scoreArray
            scoreArray.push(scoreDifference);  
        };
        console.log("All friend values: " + scoreArray);

        //Finds best match after comparing pokemon scores to user input
        for(var i = 0; i < scoreArray.length; i++) {
            if(scoreArray[i] <= scoreArray[bestMatch]){
                bestMatch = i;
            }
        }

        //Assigns best matched pokemon
        var bestFriend = friends[bestMatch];
        res.json(bestFriend);  
        
        friends.push(req.body);

    });  


}


