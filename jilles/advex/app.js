/**
 * Module dependencies.
 */

var index = require('routes/index'),
	profile = require('routes/profile'),
	search = require('routes/search');

// add all environments
 
 app.use('/', index);
 app.use('/profile', profile);
 app.use('/search', search);

//listen on localhost:8080