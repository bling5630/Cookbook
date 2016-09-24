var _ = require('ramda');

//basics
function double(x) {
  return x * 2;
}

console.log(double(878));

const double_1 = x => x * 3;

console.log(double_1(84897439));

//map
var result = _.map(x => x * 2, [1, 2, 3]);

console.log(result);

var result_1 = _.map(double, [4, 5, 6, 7, 8, 9]);

console.log(result_1);

// filter/reject
const isEven = x => x % 2 === 0;

var result_2 = _.filter(isEven, [9, 8, 7, 6, 5, 4]);
var result_3 = _.reject(isEven, [9, 8, 7, 6, 5, 4]);

console.log(result_2);
console.log(result_3);

//find
var result_4 = _.find(isEven, [2, 3, 4]);

console.log(result_4);

//reduce
const add = (accum, value) => accum + value;

const result_5 = _.reduce(add, 5, [1, 2, 3, 4, 5]);

console.log(result_5);
