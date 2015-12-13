var _ = require('ramda');

var BASE_LIST = [50, 2, 1, 9];

var BASE_DIFFERNCE = function(a,b) {
  return a - b;
};

var BASE_CONCAT = function(a,b,c,d) {
  return a + b + c + d;
};

console.log(_.reverse(_.sort(BASE_DIFFERNCE, BASE_LIST)));
console.log('break');
console.log(BASE_CONCAT('ABC', 'DEF', 'cdksfgdks', '34324234'));
