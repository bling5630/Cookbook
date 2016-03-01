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

var _ = require('lodash');

var combineKeyedArrays = _.flow(
  _.values,
  _.flatten,
  _.compact
);

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
