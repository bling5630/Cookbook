var express = require('express'),
	router = express.Router();

// Welcome message, first question and order

router.get('/cfreak', function(req, res) {
	res.send("Welcome, I am Tamas & a conferenceFreak!!");
});

router.get('/cfreak/login', function(req, res) {
	res.send("Which is favorite conference?");
});

router.get('/cfreak/login/new', function(req, res) {
	res.send("Suggest me the next one, hm?");
});

module.exports = router;