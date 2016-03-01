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
  var flattened = [];

  // produce a flat Array from an Object with values that are arrays
  _.each(keyedArrays, function(array){
    flattened = flattened.concat(array);
  });

  // only return the truthy elements of flat Array
  return _.filter(flattened, function(element) {
    return Boolean(element);
  });
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
