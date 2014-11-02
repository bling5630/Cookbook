var express = require('express');
var app = module.exports = express();

app.get('/posts', function(argumentsDreq, res) {
	res.send('posts');
});