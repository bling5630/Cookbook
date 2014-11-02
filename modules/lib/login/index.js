var express = require('express');
var app = module.exports = express();

app.get('/login', function(argumentsDreq, res) {
	res.send('login');
});