var _ = require('ramda');

const multiply = (a, b) => a * b;
const addOne = x => x + 1;
const square = x => x * x;

const operate = (x, y) => {
  const product = multiply(x, y);
  const incremented = addOne(product);
  const squared = square(incremented);

  return squared;
};

const result = operate(3, 4); // => ((3 * 4) + 1)^2 => (12 + 1)^2 => 13^2 => 169

console.log(result);

const result_2 = _.pipe(
  multiply,
  addOne,
  square
);

console.log(result_2(10,1232));

const operate_2 = (x, y) => square(addOne(multiply(x, y)));

console.log(operate_2(89,34));

const operate_3 = _.compose(
  square,
  addOne,
  multiply
);

console.log(operate_3(7676,656));
