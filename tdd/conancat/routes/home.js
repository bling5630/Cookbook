/**
 * Module dependencies.
 */

var express = require('express'),
	router = express.Router();

// GET home page

router.get('/', function(req, res) {
	res.send("Hello there!!");
});

module.exports = router;