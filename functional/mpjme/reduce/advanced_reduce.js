// advanced var fs = require('fs');

import fs from 'fs';

var output = fs.readFileSync('data.txt', 'utf8')
	.trim()
	.split('\n')
	.map(line => line.split('\t'))
	/*
	.map(function(line) {
		return line.split('\t');
	})
*/
	.reduce(function(customers, line) {
		//console.log('Hello', line);
		customers[line[0]] = customers[line[0]] || [];
		customers[line[0]].push({
			name: line[1],
			price: line[2],
			quantity: line[3]
		});
		return customers;
	}, {});

console.log('output', JSON.stringify(output, null, 2));

//cmd babel advanced_reduce.js | node