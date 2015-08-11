var _ = require('lodash');
var my = require('./wordcounter.json');
//var modified = require('./modified.json');

var input = {
  "sign": 13,
  "uptariq": 101,
  "krim": 29,
  "oct": 2435,
  "minnext": 145,
  "author": 10
};

var anything = {
  app: 1,
  read: 2,
  respond: 1,
  write: 1,
  months: 2,
  nni: 1
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

//var y = JSON.stringify(transform1(input), null, 2);
//console.log(y);
var x = JSON.stringify(transform1(my), null, 2);
console.log(x);

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
//console.log(JSON.stringify(_.map(_.sortByOrder(modified, 'quantity', 'asc')).splice(-10), null, 2));

/*
//bubble_chart_json_generator
function transform1(input) {

  'use strict';

  var output = {};
  var children = [];

  output.children = children;

  for (var key in input) {
    output.children.push({
      name: key,
      quantity: input[key]
    });
  }
  return output;
}
*/