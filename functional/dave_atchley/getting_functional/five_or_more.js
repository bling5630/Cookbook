var _ = require('ramda');

var list = [5,2,4,6,7,8,3,3,6,7,8,8,3,3,7,8,9,3,3];


function greaterOrThanEqual(a,b) {
  return a >= b;
}

function filter(list, fn) {
  return list.filter(fn);
}

function filterWith(fn) {
  return function(list) {
    return filter(list, fn);
  };
}

var greaterThanOrEqualTo = _.curry(greaterOrThanEqual);
var fiveOrMore = greaterOrThanEqual(5);

console.log(filterWith(fiveOrMore)(list));
