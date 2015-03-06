var express = require('express'),
	router = express.Router();

// Get home page

router.get('/bookshop', function(req, res) {
	res.send("Welcome, do you like the bookshop?");
});

router.get('/bookshop/login', function(req, res) {
	res.send("Which is favorite book?");
});

router.get('/bookshop/login/new', function(req, res) {
	res.send("Would you like read something new?");
});

module.exports = router;