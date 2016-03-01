var _ = require('lodash');

// example input
var usersBySocialNetwork = {
  twitter: [
    { name: '@RebootJeff' },
    { name: '@doitwithalambda' },
    null
  ],
  facebook: [
    null,
    { name: 'Kevin' },
    { name: 'Bianca' },
  ]
};

function combineKeyedArrays(keyedArrays){
  'use strict';
  return _.chain(keyedArrays)
    .reduce(concatArray, [])
    .filter(Boolean)
    .value();
}

function concatArray(arr, val) {
  'use strict';
  return arr.concat(val);
}

console.log(combineKeyedArrays(usersBySocialNetwork));

/*
// expected output
var users = [
  { name: '@RebootJeff' },
  { name: '@doitwithalambda' },
  { name: 'Kevin' },
  { name: 'Bianca' }
];
*/
