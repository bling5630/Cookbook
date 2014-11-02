var express = require('express');
var app = express();

var login = require('login');
var posts = require('./lib/posts');
var signup = require('./lib/signup');
//var users = require('./lib/users');
var userlist = require('./lib/users-list');

app.use(login);
app.use(posts);
app.use(signup);
//app.use(users);
app.use(userlist);

app.listen(3000);
console.log('listening on port 3000');