var _ = require('ramda'),
  S = require('spots');

function divideBy3(x) {
  return x / 3;
}

console.log([3,6,9].map(divideBy3));

let divideBy4 = y=>y/4;

console.log([4,8,12].map(divideBy4));


function mul(a,b) {
  return a*b;
}

console.log([1,2,3].map(mul.bind(null,2)));

function div(a, b) {
    return a / b;
}
console.log([3, 6, 9].map(div.bind(null, 3)));

console.log([12, 36, 72].map(S(div, S, 3)));
