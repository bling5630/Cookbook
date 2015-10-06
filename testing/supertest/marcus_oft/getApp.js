var app = require('express')(),
  port = process.env.PORT || 3000;

app.get('/user', function(req, res) {
  res.status(200)
    .send({
      name: 'marcus'
    });

});


var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.getApp = app;
