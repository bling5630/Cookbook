'use strict';

var express = require('express'),
  app = express(),
  wc = require('./wordcounter'),
  fs = require('fs'),
  //favicon = require('serve-favicon'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 8080;

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
  // http://localhost:8080/result/?url=www.port.hu
  // {"querystring_url":"www.port.hu"}
  wc(req.query.url, function(error, words) {
  	console.log(words);
    res.send(words);
    /*
azt kellene megcsinalni, hogy
valahogy, a html csinalja a cuccot
azt kellene kiszolgalni, megjelenjen a buborekos cucc,
itt redirecterlni, express redirect, arra az url re ami a html
kell a static, ha public ba tudok redirectelni, piblic ba json be ki kell irni
src be kene beleirnia a tartalmat, utana kellene
redirectelnihivatkozasokat megcsinalni, json filet is akar kihagyni
    */
  });

  // itt kell meghivni
  //fs.writeFile('text.txt', req.query.url);
  // write the url into text.txt
});

app.get('/trial/', function(req, res, next) {
  res.json({querystring_url: req.query.url});
// http://localhost:8080/trial/?url=www.port.hu
// {"querystring_url":"www.port.hu"}
});

//http://localhost:8080/add_url.html
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
