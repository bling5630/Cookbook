var express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


var locationList = [];

app.get('/', function(req, res, next) {
  res.send('Just sayin!');
});

app.get('/users/1', function(req, res) {
  var user = {
    id: 1,
    name: "Little Box",
    size: "Big",
    weight: "Light",
    fragility: "Yes"
  };

  res.status(200).send(user);
});

app.put('/users/1', function(req, res) {
  var user = {
    id: req.body.id,
    name: req.body.name,
    size: req.body.size,
    weight: req.body.weight,
    fragility: req.body.fragility

  };
  res.status(200).send(user);
});

app.post('/locations', function(req, res) {
  var location = {
    addressStreet: req.body.addressStreet,
    addressCity: req.body.addressCity,
    addressState: req.body.addressState,
    addressZip: req.body.addressZip,
    userId: req.body.userId
  };
  locationList.push(location);
  res.send(location);
});

app.get('/users/1/location', function(req, res) {
  res.send(locationList[0]);
});


app.get('/users/2/location', function(req, res) {
  if (req.body.id == 2) {
    res.send(locationList[0]);
  } else {
    res.status(401);
  }
});

var server = app.listen(port, function() {
  console.log('Server started on %s', server.address().port);
});

module.exports.index = app;
