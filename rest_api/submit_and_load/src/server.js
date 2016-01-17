'use strict';

var express = require('express'),
    app = express(),
    wordCounter = require('./wordcounter'),
    fs = require('fs'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  res.send('Hello !');
});

app.get('/result/', function(req, res, next) {
  wordCounter(req.query.url, function(error, words) {
  	console.log(words);
    res.send(words);


/*
a html csinalja a cuccot, azt kellene kiszolgalni,
megjelenjen a buborekos cucc,itt redirecterlni,
express redirect, arra az url re ami a html
kell a static, ha public ba tudok redirectelni,
piblic ba json be ki kell irni
src be kene beleirnia a tartalmat, utana kellene
redirectelni hivatkozasokat megcsinalni,
json filet is akar kihagyni
*/
  });
  // itt kell meghivni
  //fs.writeFile('../public/bubble_chart_data.json', req.query.url);
  // write the url into text.txt
});

app.get('/majom', function(req, res){
  res.redirect('rackoon.png');
});

var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.server = app;
