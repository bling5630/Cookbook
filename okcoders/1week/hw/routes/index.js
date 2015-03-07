var express = require('express'),
	router = express.Router();

// Get home page

router.get('/', function(req, res) {
	res.send("Hello @ conferenceFreak!!!");
});

module.exports = router;