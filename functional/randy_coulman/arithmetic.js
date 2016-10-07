var _ = require('ramda');

const multiply = (a, b) => a * b;
/*
//version_1
const addOne = x => x + 1;
const square = x => x * x;

const operate = _.pipe(
  multiply,
  addOne,
  square
);

var result = operate(3, 4); // => ((3 * 4) + 1)^2 => (12 + 1)^2 => 13^2 => 169

console.log(result);

//version_2
const square = x => multiply(x, x);

const operate = _.pipe(
  multiply,
  _.add(1),
  square
);

*/
//version_3
const square = x => multiply(x, x);
const operate = _.pipe(
  multiply,
  _.inc,
  square
);

var result = operate(3, 4); // => ((3 * 4) + 1)^2 => (12 + 1)^2 => 13^2 => 169
console.log(result);
