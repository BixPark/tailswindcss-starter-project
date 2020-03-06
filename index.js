var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public')); //Serves resources from public folder
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
var server = app.listen(5000);