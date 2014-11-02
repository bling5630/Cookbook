
var express = require('express');
var app = express();

var login = require('./lib/login');
var posts = require('./lib/posts');
var signup = require('./lib/signup');
var users = require('./lib/users');

app.use(login);
app.use(signup);

app.listen(3000);
console.log('listen port 3000');


