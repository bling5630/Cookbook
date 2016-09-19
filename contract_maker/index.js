var express = require('express'),
    bodyParser = require('body-parser'),
    //contract_builder = require('./contractBuilder'),
    logger = require('morgan'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 9999;

app.use(logger("dev"));
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next){
  res.sendFile(path.join(__dirname+'/index.html'));
});

var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});
