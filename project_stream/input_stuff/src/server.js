var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    fs = require('fs'),
    app = express(),
    port = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  'use strict';
  res.send('Hey, welcome on board & have fun w/ my project streaming stuff :)');
});

app.get('/result/', function(req, res, next) {
  'use strict';
    //fs.writeFile(__dirname + '/../public/data.json', JSON.stringify({children:words}, null, 2), function(error) {
    fs.writeFile(__dirname + '/../public/data.json', function(error) {
      if (error) {
        return console.log(error);
      }
      //res.redirect('/bubble_chart.html');
    });
});

var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.server = app;
