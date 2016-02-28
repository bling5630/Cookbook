var express = require('express'),
    logger = require('morgan');

var app = express();
    app.use(logger("dev"));

app.get('/', function (req, res){
  res.send('Hello there, world!\n');
});

var port = 9000;
app.listen(port);
console.log('Listening on port', port);
