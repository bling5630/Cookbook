'use strict';

var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;


app.use(logger("dev"));
app.use(express.static("public"));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies



app.get('/api/user', function(req, res) {
  var user_id = req.params('id');
  var token = req.params('token');
  var geo = req.params('geo');

  res.send(user_id + ' ' + token + ' ' + geo);

});

// POST http://localhost:8080/api/users
// parameters sent with
app.post('/api/users', function(req, res) {
    var user_id = req.body.id;
    var token = req.body.token;
    var geo = req.body.geo;

    res.send(user_id + ' ' + token + ' ' + geo);
});

app.get('/api/:version', function(req, res) {
  res.send(req.params.version);
});

app.param('name', function (req,res,next,name) {

  var modified = name + '-dude';

  req.name = modified;

  next();

});

app.get('/api/users/:name', function(req, res) {
  res.send('What is up ' + req.name + '!');
});

// wordcounter topics

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

app.param('halandzsa', function (req,res,next,halandzsa) {

  var modified = halandzsa + '-dude';

  req.halandzsa = modified;

  next();

});

app.get('/api/users/halandzsa', function(req, res) {
  res.send('What is up ' + req.name + '!');
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);
