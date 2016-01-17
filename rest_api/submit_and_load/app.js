'use strict';

var _ = require('ramda');

var input = {
  alma: 1,
  korte: 5,
  banan: 6,
  szilva: 2
};

function transform(input) {
  var output = [];
  for (var key in input) {
    output.push({
      name: key,
      quantity: input[key]
    });
  }

  var result = {children: output};

  return result;
}

console.log(JSON.stringify(transform(input)));
