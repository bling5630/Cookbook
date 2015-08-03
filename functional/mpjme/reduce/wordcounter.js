import fs from 'fs';
//var fs = require('fs');

/*
var output = fs.readFileSync('wordcounter.json', 'utf8');

JSON.parse(output, function(k, v) {
	console.log(k, v);
});
*/

var output2 = fs.readFileSync('2data.txt', 'utf8')
	.trim()
	.split('\n')
	.map(line => line.split('\t'))
	.reduce((words, line) => {
		console.log(line);
		words[line[0]] = words[line[0]] || [];
		words[line[0]].push({
			name: line[0],
			quantity: line[1]
		});
		return words;
	}, {});

console.log(JSON.stringify(output2, null, 2));