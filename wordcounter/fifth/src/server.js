'use strict';

var express = require('express'),
  app = express(),
  fs = require('fs'),
  //favicon = require('serve-favicon'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.static("public"));

// Config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function(req, res, next) {
  res.send('Hello dear!');
});

// version #2
app.get('/result/', function(req, res, next) {
  //res.send('Here you go with your base URL! ' + req.query.url);
  //res.send(req.query.url);
  //res.json({querystring_url: req.query.url});
  // http://localhost:3000/result/?url=www.port.hu
  // {"querystring_url":"www.port.hu"}
  fs.writeFile('text.txt', req.query.url);
  // write the url into text.txt
});

app.get('/trial/', function(req, res, next) {
  res.json({querystring_url: req.query.url});
// http://localhost:3000/trial/?url=www.port.hu
// {"querystring_url":"www.port.hu"}
});

//http://localhost:3000/add_url.html
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

/*
app.post('/result/', function(req, res, next) {
  console.log(req.body.url);
  // www.index.hu

});

*/


var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.server = app;
