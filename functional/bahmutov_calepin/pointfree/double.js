var _ = require('ramda');

console.log([1,2,3].map(function(x) {
  return 2*x;
}));

console.log([4,5,6].map(x=> x*3));

function double(z) {
  return 2*z;
}
console.log([1,2,3].map(function(z) {
  return double(z);
}));

console.log([1,2,3].map(double));

let triple = y=>y*3;

console.log([4,5,6].map(triple));
