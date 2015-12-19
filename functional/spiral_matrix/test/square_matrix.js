var _ = require('ramda');

var matrix = function (n) {
  return _.map(function (r) {
    return _.map(function (c) {
      return c[r];

    },BASE_DATA);

  },_.keys(BASE_DATA[0]));
};

var BASE_DATA = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
];


console.log(matrix(BASE_DATA));

var BASE_N = 10;

console.log(_.times(_.identity, BASE_N));

var BASE_NUMBER = 5;

function matrix_machine(n) {
  return _.times(_.identity, n);
}

console.log(matrix_machine(BASE_NUMBER));

/*
function transpose(a)
{
  return a[0].map(function (_, c) { return a.map(function (r) { return r[c]; }); });
}

console.log(transpose(5));
*/
