var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.send("Hellow World")
})


app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use(function (req, res) {
    res.setHeader('Content-type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});