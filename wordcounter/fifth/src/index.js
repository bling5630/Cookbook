var express = require('express'),
  app = express(),
  path = require('path'),
  logger = require('morgan'),
  port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.static("public"));


app.get('/', function(req, res) {
  res.send('Just sayin!');
});


app.get('../public/kitten', function(req, res) {
  res.sendFile(path.join(__dirname + 'kitten.jpg'));
});



/*
app.get('/want', function(req, res) {
  res.send('Do you want something?');
});

app.get('/book', function(req, res) {
  res.send('Read more buddy!');
});

app.get('/eat', function(req, res) {
  res.send('Which is your favorite dish?');
});

app.get('/ignore', function(req, res) {
  res.send('Sorry, I am not your friend!');
});
*/

var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});
