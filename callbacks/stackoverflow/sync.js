var fs = require('fs');

var data = fs.readFileSync('text.txt', 'utf-8');

console.log(data);