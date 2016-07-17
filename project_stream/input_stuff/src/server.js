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

  var json_summary_template = {
        fee:req.query.url[0],
        name:req.query.url[1],
        company:req.query.url[2],
        role:req.query.url[3]
              };

    fs.writeFile(__dirname + '/../public/data.json', JSON.stringify({summary:json_summary_template}, null, 2));

  res.redirect('/bbc.gif');
  //res.json({querystring_url: req.query.url})
});



var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.server = app;
