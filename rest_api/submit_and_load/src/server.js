'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    wordCounter = require('./wordcounter'),
    logger = require('morgan'),
    fs = require('fs'),
    app = express(),
    port = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  res.send('Hello Dear!');
});

app.get('/result/', function(req, res, next) {
  wordCounter(req.query.url, function(error, words) {
  	console.log(words);
    // res.send(words); => print words out on the UI
    fs.writeFile(__dirname + '/../public/bubble_chart_data.json', words, function(err) {
      console.log(err);
      res.redirect('/bubble_chart.html');
    });
  });
});


app.get('/getdata', function(req, res) {
  fs.readFile(__dirname + '/../public/bubble_chart_data.json', 'utf8', function(err, data) {
    if (err)
      throw err;
    res.send(data);
  });
});

/*
sync way
app.get('/getdata', function(req, res) {
  //res.send('{"children": [{"name": "hogy","quantity": 9}, {"name": "vagy","quantity": 19}, {"name": "aha","quantity": 2}]}');
  var dataFromJSON = fs.readFileSync(__dirname + '/../public/bubble_chart_data.json');
  res.send(dataFromJSON);
});
*/

/*
get data, kicserelem a html ben is hogy onnan olvasssa, fs readfile, send eredmenyt
*/

var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.server = app;
