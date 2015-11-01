var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080);

app.use(express.static(__dirname));

app.post('/', function(req, res){
  console.log(req.body);
  console.log(req.body.firstName);
  console.log(req.body.lastName);
  fs.writeFile('test.txt',req.body.firstName);
  res.redirect('back');
});
