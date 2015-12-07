var _ = require('ramda');

// Simple comparison for '>='

function greaterOrThanEqual(a,b) {
  return a >= b;
}

console.log(greaterOrThanEqual(2,1));
console.log('break');
console.log(_.gte(3,4));
