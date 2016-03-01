var _ = require('ramda');

// Object<Array> --> Array (more old-fashioned)
// ...or...maybe...
// {k: [v]} --> [v] (similar to Ramda docs)

var combineKeyedArrays = _.pipe(
  _.values,
  _.unnest,
  _.filter(Boolean)
);

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
