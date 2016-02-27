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
    // null? cmd ?
    // res.send(words); => print words out on the UI
    // http://nba.com empty ?
    // sample site http://hijiangtao.github.io/ss-vis-component/
    fs.writeFile(__dirname + '/../public/dataBubbleChart.json', JSON.stringify({children:words}, null, 2), function(err) {
      console.log(err);
      res.redirect('/bubble_chart.html');
    });
  });
  wordCounter(req.query.url, function(error, words) {
    fs.writeFile(__dirname + '/../public/dataBarChart.json', JSON.stringify(words, null, 2), function(err) {
      console.log(err);
    });
  });
  wordCounter(req.query.url, function(error, words) {
    fs.writeFile(__dirname + '/../public/dataTable.json', JSON.stringify(words, null, 2), function(err) {
      console.log(err);
    });
  });
});


app.get('/dataBubbleChart', function(req, res) {
  fs.readFile(__dirname + '/../public/dataBubbleChart.json', 'utf8', function(err, data) {
    if (err)
      throw err;
    res.send(data);
  });
});

app.get('/dataBarChart', function(req, res) {
  fs.readFile(__dirname + '/../public/dataBarChart.json', 'utf8', function(err, data) {
    if (err)
      throw err;
    res.send(data);
  });
});

app.get('/dataTable', function(req, res) {
  fs.readFile(__dirname + '/../public/dataTable.json', 'utf8', function(err, data) {
    if (err)
      throw err;
    res.send(data);
  });
});


var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.server = app;
