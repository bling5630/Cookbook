var _ = require('lodash');
var my = require('./myfile.json');
var input = {
	"sign": 1,
	"uptariq": 1,
	"krim": 2,
	"oct": 2,
	"minnext": 1,
	"author": 1
};


function transform1(input) {

	'use strict';

	var output = [];
	for (var key in input) {
		output.push({
			key: key,
			value: input[key]
		});
	}
	return output;
}


var x = JSON.stringify(transform1(input));

//console.log(x);

// valid JSON
var y = [
  {
    "key": "sign",
    "value": 1
  },
  {
    "key": "uptariq",
    "value": 1
  },
  {
    "key": "krim",
    "value": 2
  },
  {
    "key": "oct",
    "value": 2
  },
  {
    "key": "minnext",
    "value": 1
  },
  {
    "key": "author",
    "value": 1
  }
]
;

//console.log(_.sortBy(y, 'value'));
console.log(JSON.stringify(_.map(_.sortByOrder(my, 'age', 'desc')), null, 2));