import fs from 'fs';

var output = fs.readFileSync('wordcounter.json', 'utf8');

var rawDataValue = JSON.parse(output, function(k, v) {
	console.log(v);
});