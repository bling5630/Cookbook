var _ = require('ramda');

// Simple comparison for '>='

function greaterThanEqual(a,b) {
  return a >= b;
}

console.log(greaterThanEqual(2,1));
console.log('break');
console.log(_.gte(3,4));
