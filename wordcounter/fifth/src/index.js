var express = require('express'),
  app = express(),
  logger = require('morgan'),
  port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.static("public"));


app.get('/', function(req, res, next) {
  res.send('Just sayin!');
});

app.get('../public/kitten', function(req, res, next) {
  res.sendFile('kitten.jpg', function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: ', 'kitten.jpg');
    }
  });
});

app.get('../public/button', function(req, res, next) {
  res.sendFile('button.html', function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: ', 'button.html');
    }
  });
});



var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.index = app;
