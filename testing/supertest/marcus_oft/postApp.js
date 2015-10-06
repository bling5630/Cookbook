var express = require('express'),
    app = express(),
    connect = require('connect'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', function (req, res) {
  var name = req.body.username,
      email = req.body.email;

      res.status(200)
      .send(name + ' is stored');
});

var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.postApp = app;
