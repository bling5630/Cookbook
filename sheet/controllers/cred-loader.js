/**
* Module dependecies
* Load credential file
*/

var fs = require('fs');

if (!fs.existSync('./creds.json')) {
	console.log("obj");
	console.log('{"Username": "Example", "Password": "Example"}');
	process.exit(1);
}

module.exports = require('./creds.json');