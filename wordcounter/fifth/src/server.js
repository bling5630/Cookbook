'use strict';

var express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.static("public"));

// Config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  res.send('Just sayin!');
});

app.get('/result/:url', function(req, res, next) {
  res.send('Here you go!');

});




app.get('../public/button', function(req, res, next) {
  res.send('button.html', function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: ', 'button.html');
    }
  });
});













app.get('../public/add_url', function(req, res, next) {
  res.send('add_url.html', function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: ', 'add_url.html');
    }
  });
});




var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.server = app;
