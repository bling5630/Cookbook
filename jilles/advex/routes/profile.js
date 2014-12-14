var express = require('express'),
	router = require('router');

router.get('/id/:id', function(req, res) {
	var id = req.params.is;
});

// advanced
/**
* router.get('/:id([0-9]{3,8})', 
* function (req, res, next) {
* var id = req.params.id;
* ...
* if (usersdb.find(id)) {....}
* else {next(new Error('User not found'));}
* })
*/

// more advanced
/**
* router.param('id', function(req, res, next, id) 
* { var user = usersdb.find({_id: id});
* if (user) {req.user = user;}
* else {next(new Error('User not found'));}
* next();
* });
*/

module.exports = router;