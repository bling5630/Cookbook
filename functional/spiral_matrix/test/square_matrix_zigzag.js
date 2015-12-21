var _ = require('ramda');

var matrix_zigzag = function (number) {
  return _.map(function (row) {
    return _.map(function (column) {
      return column[row];

    }, BASE_DATA);

  },_.keys(BASE_DATA[0]));
};

var BASE_DATA = [
  [1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],
];

console.log(matrix_zigzag(BASE_DATA));
