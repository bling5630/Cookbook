var request = require('request');
var _ = require('lodash');

exports.stuff = function(p, c) {
	var url = 'http://localhost:3000/api/product/15';
	var paramsObj = {
		'format': 'json'
	};
	_.extend(paramsObj, p);

	request(url, {
		qs: paramsObj
	}, function(error, response, body) {
		callback(body);
	});
};



/*
var app = require('express')(),
	port = process.env.PORT || 3000;
app.get('/api/product/15', function(req, res) {
	console.log('stuff method has been called');
	res.send({
		data: {
			id: '15',
			name: 'Flamethrower 5000',
			price: '5000'
		}
	});
});
// app listen on localhost:3000

var server = app.listen(port, function() {
	console.log('Server started on port 3000');
});
*/