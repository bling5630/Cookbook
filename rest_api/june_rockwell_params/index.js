'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger("dev"));


// query string

app.get('/dog/', function(req, res) {
  res.json({querystring_breed: req.query.breed,
            age: req.query.age});
});
// http://localhost:8080/dog/?breed='Whippet'
// {"querystring_breed":"'Whippet'"}
// {"querystring_breed":"Whippet","age":"10"}


// parameter
/*
app.get('/dog/:name', function(req, res) {
    res.json({ parameter_name: req.params.name });
});
// {"parameter_name":"Devo"}
*/
app.get('/dog/:name/:id', function(req, res) {
   res.json({ parameter_name: req.params.name,
              id: req.params.id });
});

// {"parameter_name":"Devo","id":"123"}

// Combine parameters and query strings

app.get('/dog/:name/', function(req, res) {
   res.json({ dog_name: req.params.name,
             dog_breed: req.query.breed });
});

// {"dog_name":"Devo","dog_breed":"'Whippet'"}



app.listen(app.get('port'), function() {
 console.log('Server started on localhost:' +
 app.get('port') + '; Press Ctrl-C to terminate.');
});
