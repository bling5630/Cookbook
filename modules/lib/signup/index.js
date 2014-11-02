var express = require('express');
var app = module.exports = express();

app.get('/signup', function(argumentsDreq, res) {
	res.send('signup');
});