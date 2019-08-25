var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

//Body parser stuff
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Router
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Displays port beingl listend on
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});