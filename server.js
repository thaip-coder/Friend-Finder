var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send("Hellow World")
})

//Body parser stuff
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Needed for routes to work
app.use(express.static('app/public'));

//Router
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//Displays port beingl listend on
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});