var express = require('express'),
	router = express.Router();

// Get home page

router.get('/', function(req, res) {
	res.send("Hello I am your bookshelf");
});

module.exports = router;