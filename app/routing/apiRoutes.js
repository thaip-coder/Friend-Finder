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
            sum += parseInt(userScore[i]);
        };
        console.log("User inputes: " + userScore);
        console.log("Total of user value: " + sum);
        
        //Traverses friends.js array
        for(var i = 0; i < friends.length; i++) {
            scoreDifference = 0;
            friendSum = 0;
            //Stores value array for each friends' values
            friendArray = friends[i].scores;
                //Calculates total value for friend
                for(var j = 0; j < friendArray.length; j++) {
                    friendSum += friendArray[j];
                };
            //Calculates the scoreDifference between each friends' values and the user's values  
            scoreDifference = Math.abs(friendSum - sum);
            //Pushes all results to scoreArray
            scoreArray.push(scoreDifference);
        };
        console.log("All friend values: " + scoreArray);

        //Finds best match after comparing friends' scores to user input
        for(var i = 0; i < scoreArray.length; i++) {
            if(scoreArray[i] <= scoreArray[bestMatch]){
                bestMatch = i;
            }
        }

        //Assigns best matched friend
        var bestFriend = friends[bestMatch];
        res.json(bestFriend);  
        
        friends.push(req.body);

    });  


}


