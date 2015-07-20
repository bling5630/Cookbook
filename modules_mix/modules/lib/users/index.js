var express = require('express');
var app = module.exports = express();

app.get('/users', function(argumentsDreq, res) {
	res.send('users');
});