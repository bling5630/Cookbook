var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    streamer_stuff = require('./streamer'),
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
//data okey but different form
  fs.writeFile(__dirname + '/../public/data.json', req.query.url);
//redirect okey
  res.redirect('/bbc.gif');
  //res.redirect('http://nba.com');

/*

streamer_stuff(req.query.url, function(error, content) {
  // this is okey
  //console.log(content);
  fs.writeFile('text.txt',
    content, function(error) {

  });
});

  res.redirect('/bbc.gif');
  //res.redirect('http://nba.com');







app.get('/result/', function(req, res, next) {
  'use strict';
  streamer_stuff(req.query.url, function(error, items) {
    // this is okey
    console.log(items);
  });
// data.json file is filled but not exacly that I want
  fs.writeFile(__dirname + '/../public/data.json', JSON.stringify({children:req.query.url}, null, 2), function(error) {
    if (error) {
      return console.log(error);
    }
    //redirect is okey
    res.redirect('/bbc.gif');
  });
*/
/*
app.get('/result/', function(req, res, next) {
  'use strict';
  streamer_stuff(req.query.url, function(error, items) {
    // data.json file is empty???
    fs.writeFile(__dirname + '/../public/data.json', JSON.stringify({children:items}, null, 2), function(error) {
      if (error) {
        return console.log(error);
      }
      // no redirect???
      res.redirect('/bbc.gif');
    });
  });
*/




});


var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.server = app;
