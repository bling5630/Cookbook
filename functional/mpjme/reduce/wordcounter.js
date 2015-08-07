import fs from 'fs';
//var fs = require('fs');

//echo -e "test \t 2"
//sed 's/ /\t/' 2data.txt 
//gawk '$1 = $1 FS "quantity"'
//sed -i $'1 i\\\nname\tquantity'


var output = fs.readFileSync('wordcounter.json', 'utf8');

var rawDataKey = JSON.parse(output, function(k, v) {
	console.log(JSON.stringify(k));
});


/*


var items = {};

function addDataToItems(name, value, rawDataValue, rawDataKey) {
	items[name] = {
		rawDataKey: rawDataValue,
	};
}

var output2 = fs.readFileSync('2data.txt', 'utf8')
	.trim()
	.split('\n')
	.map(line => line.split('\t'))
	.reduce((words, line) => {
		//console.log(line);
		words[line[0]] = words[line[0]] || [];
		words[line[0]].push({
			name: line[0],
			quantity: line[2],
		});
		return words;
	}, {});

console.log(JSON.stringify(output2, null, 2));
*/