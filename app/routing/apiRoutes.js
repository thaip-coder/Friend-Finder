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
        var scoreDifference = 0;  
        var sum = 0;
        var pkmnSum = 0;    

        //User score sum
        for(var i = 0; i < userArray.length; i++) {
            sum = 0;
            sum = sum + userArray[i];
        };
        console.log(userScore);
        console.log(userArray);
        console.log(sum);
        

        
    
        for(var i = 0; i < friends.length; i++) {
            scoreDifference = 0;
            pkmnArray = friends[i].scores;
            for(var j = 0; j < pkmnArray.length; j++) {
                pkmnSum = 0;
                scoreDifference = scoreDifference + (Math.abs((pkmnSum += pkmnArray[j]) - sum));
            }
            //Pushes all results to scoreArray
            scoreArray.push(scoreDifference);  
        };
        console.log("All pkmn values: " + scoreArray);

        //Finds best match after comparing pokemon scores to user input
        for(var i = 0; i < scoreArray.length; i++) {
            if(scoreArray[i] <= scoreArray[pkmnMatch]){
                pkmnMatch = i;
            }
        }

        //Assigns best matched pokemon
        var pokemon = friends[pkmnMatch];
        res.json(pokemon);  
        
        friends.push(req.body);

    });  


}


