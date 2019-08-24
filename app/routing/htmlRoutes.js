//Html routes are used to help direct the user. 
//Whenever they click on a link the router will understand based on the information in this file, what page to deliver to them.

//Required Path variable
var path = require('path');
//route
module.exports = function(app){

//GET request 
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}