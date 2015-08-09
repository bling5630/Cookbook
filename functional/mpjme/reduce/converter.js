var _ = require('lodash');
//var my = require('./wordcounter.json');
var modified = require('./modified.json');

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
      name: key,
      quantity: input[key]
    });
  }
  return output;
}


//var x = JSON.stringify(transform1(my), null, 2);

//console.log(x);

// valid JSON
var y = [{
  "key": "sign",
  "value": 1000
}, {
  "key": "uptariq",
  "value": 112
}, {
  "key": "krim",
  "value": 2534654
}, {
  "key": "oct",
  "value": 26
}, {
  "key": "minnext",
  "value": 135435
}, {
  "key": "author",
  "value": 1
}];

//console.log(_.sortBy(y, 'value'));
//console.log(JSON.stringify(_.map(_.sortByOrder(modified, 'quantity', 'desc')), null, 2));
console.log(JSON.stringify(_.map(_.sortByOrder(modified, 'quantity', 'asc')).splice(-10), null, 2));
